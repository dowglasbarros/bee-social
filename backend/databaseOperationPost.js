const Hapi = require('hapi')
const DatabasePosts = require('./databaseBeeSocial')
const Boom = require('boom')
const Joi = require('joi')


async function main() {
  try {

    const conn = DatabasePosts.conectar();
    const posts = new DatabasePosts(conn);

    const app = new Hapi.Server({
      port: 3000
    })

    app.route([
      {
        method: 'GET',
        path: '/posts',
        handler: async (req, han) => {
          try {
            const { limitar, ignorar } = req.query;
            const resultado = await posts
              .listar({}, {
                limitar: parseInt(limitar),
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
      }
      , {
        method: 'POST',
        path: '/posts',
        handler: async (request, h) => {
          try {
            const item = request.payload;
            const resultado = await posts.cadastrar(item)
            return resultado
          }
          catch (error) {
            console.error('Deu ruim', error);
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
      }
    ])
    await app.start()
    console.log(`Servidor rodando em: ${app.info.port}`)
  }
  catch (error) {
    console.error(error)
  }
}

main()
