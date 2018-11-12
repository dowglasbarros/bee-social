const { config } = require('dotenv');
// adiciomos uma configuracao
// para producao do swagger
let swaggerHostConfig = {};
if (process.env.NODE_ENV === 'production') {
  config({ path: './config/.env.prod' });

  swaggerHostConfig.host = process.env.HOST;
  swaggerHostConfig.schemes = ['https'];
} else config({ path: './config/.env.dev' });

// instalamos 3 modulos para documentar o projeto
const Vision = require('vision');
const Inert = require('inert');
const HapiSwagger = require('hapi-swagger');
// apos importar os modulos, registramos os plugins
const swaggerConfig = {
  info: {
    title: 'API de Publicações',
    version: '1.0',
  },
  lang: 'pt',
  ...swaggerHostConfig,
};

// importamos o jwt, para gerenciar tokens
const Jwt = require('jsonwebtoken');
const MINHA_CHAVE_SECRETA = process.env.JWT_KEY;

// importamos o modulo para controlar a autenticacao
// nas rotas
const HapiJwt = require('hapi-auth-jwt2');


const Hapi = require('hapi')
const DatabasePosts = require('./databaseBeeSocial')
const Boom = require('boom')
const Joi = require('joi')

function validateHeaders() {
  return Joi.object({
    authorization: Joi.string().required(),
  }).unknown();
}


async function main() {
  try {

    const conn = DatabasePosts.conectar();
    const posts = new DatabasePosts(conn);

    const app = new Hapi.Server({
      port: 3000,
      routes: {
        cors: {
          origin: ['*']
        }
      }
    })

    await app.register([
      HapiJwt,
      Vision,
      Inert,
      {
        plugin: HapiSwagger,
        options: swaggerConfig,
      },
    ]);

    const obterDadoRequest = (request, username = '') => {
      const {
        path,
        query,
        params,
        payload,
        headers: { host },
      } = request;

      const item = {
        path,
        query,
        params,
        payload,
        host,
        username: username,
        at: new Date().toISOString(),
      };
      return item;
    };

    app.auth.strategy('jwt', 'jwt', {
      key: MINHA_CHAVE_SECRETA,
      verifyOptions: {
        algorithms: ['HS256'],
      },
      validate: (dado, request, callback) => {
        // pegamos as informações do request e logamos

        logRequest(request.path, obterDadoRequest(request, dado.username));

        // aqui fariamos alguma validação em cima do dado
        // verificar se ele ainda existe
        // verificar se ele pagou a conta

        // caso tudo validado
        return {
          isValid: true,
        };
      },
    });

    // registramos a estrategia default de autenticacao
    app.auth.default('jwt');

    app.route([
      {
        method: 'POST',
        path: '/login',
        handler: async (req, han) => {

          const item = req.payload;

          const resultado = await posts
            .signIn('login', item)

          let nameToken = resultado.name;
          let firstAccessToken = resultado.firstAccessToken;
          let emailToken = resultado.email;
          if (
            resultado.email !== item.email ||
            resultado.password !== item.password
          )
            return Boom.unauthorized('Login ou senha inválidos');

          const dadosToken = {
            emailToken,
            nameToken,
            firstAccessToken,
            company: 'avanade',
          };
          const token = Jwt.sign(dadosToken, MINHA_CHAVE_SECRETA);
          console.log(token)
          return {
            token,
          };

          //return resultado;
        },

        config: {
          // desativamos a autenticacao para o login
          auth: false,
          tags: ['api'],
          description: 'Deve gerar um token para o usuario',
          validate: {
            payload: {
              email: Joi.string()
                .max(50)
                .required(),
              password: Joi.string()
                .max(100)
                .required(),
            },
          },
          validate: {
            failAction: (request, h, err) => {
              throw err
            },
          }
        }
      },
      {
        method: 'GET',
        path: '/posts',
        handler: async (req, han) => {
          try {
            const { limitar, ignorar } = req.query;
            const resultado = await posts
              .listar('posts', {}, {
                limitar: 100,
                ignorar: parseInt(ignorar)
              })
            return resultado;
          }
          catch (error) {
            return Boom.internal();
          }
        },
        config: {
          validate: {
            failAction: (request, h, err) => {
              throw err
            },
            query: {
              ignorar: Joi.number().integer().default(0),
              limitar: Joi.number().integer().default(10)
            }
          }
        }
      }, {
        method: 'POST',
        path: '/posts',
        handler: async (request, h) => {
          try {
            const item = request.payload;
            const resultado = await posts.cadastrar('posts', item)
            return resultado
          }
          catch (error) {
            console.error(error);
            return Boom.internal();
          }
        },
        config: {
          validate: {
            failAction: (request, h, err) => {
              throw err
            },
            //payload: validatePostPayload(),

          }
        }
      }, {
        path: '/posts/{groupName}',
        method: 'GET',
        handler: async (request, h) => {
          try {
            const { groupName } = request.params;
            const result = await posts.listar('posts', {
              groupName: groupName,
            });
            return result;
          }
          catch (error) {
            console.error(error);
            return Boom.internal();
          }
        },
        config: {
          validate: {
            params: {
              groupName: Joi.string()
                .max(200)
                .required(),
            }
          }
        }
      },
      {
        method: 'POST',
        path: '/register',
        handler: async (request, h) => {
          try {
            const item = request.payload;
            const resultado = await posts.cadastrar('register', item)
            return resultado
          }
          catch (error) {
            console.error(error);
            return Boom.internal();
          }
        },
        config: {
          validate: {
            failAction: (request, h, err) => {
              throw err
            },
            //payload: validatePostPayload(),

          }
        }
      },

    ])
    await app.start()
    console.log(`Servidor rodando em: ${app.info.port}`)
  }
  catch (error) {
    console.error(error)
  }
}

main()
