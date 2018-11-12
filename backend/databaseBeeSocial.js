const Mongoose = require('mongoose')

const postSchema = new Mongoose.Schema({
  userName: String,
  groupName: String,
  avatarPicture: String,
  description: String,
  pictures: {
    src: String,
    alt: String,
  },
  likes: Number
})

const registerSchema = new Mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstAccess: {
    type: Boolean,
    default: true
  },
  activeUser: {
    type: Boolean,
    default: true
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
})

const loginSchema = new Mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }, firstAccess: {
    type: Boolean,

  },
})

class DataBaseMongoDb {

  constructor(postDb) {
    this.postDb = postDb;
  }

  static conectar() {
    Mongoose
      .connect('mongodb://localhost:27017/beeSocial', { useNewUrlParser: true })

    const connection = Mongoose.connection
    connection.once('open', () => console.log('MongoDB Ativo!!'))

    // const postModel = Mongoose.model('posts', postSchema)
    // return postModel

  }

  async cadastrar(collection, item) {
    const resultCreate = await getModel(collection).create(item)
    return resultCreate;
  }

  listar(collection, query, pagination = { limitar: 1000, ignorar: 0 }) {
    return getModel(collection)
      .find(query)
      .skip(pagination.ignorar)
      .limit(pagination.limitar)
  }

  signIn(collection, query) {
    return getModel(collection)
      .findOne(query)
  }

}


// async function main() {
//   const postDb = DataBaseMongoDb.conectar()
//   const database = new DataBaseMongoDb(postDb)

//   const item = {
//     "_id": Mongoose.Types.ObjectId("5bb8ce71881ab14faeae5d78"),
//     "userName": "Felipe",
//     "avatarPicture": "assets/images/avatar2.png",
//     "description": "222222222222222",
//     "groupName": 'programação',
//     "pictures": [
//       {
//         "src": "assets/images/lights.jpg",
//         "alt": "Northern Lights"
//       }
//     ],
//     "likes": 0
//   }

//   const resultCreate = await database.cadastrar(item)
//   console.log('resultCreate', resultCreate)

// }

// main()

module.exports = DataBaseMongoDb;

function getModel(collection) {

  switch (collection) {
    case 'posts':
      return Mongoose.model('posts', postSchema);
    case 'register':
      return Mongoose.model('register', registerSchema);
    case 'login':
      return Mongoose.model('register', loginSchema);
  }

}