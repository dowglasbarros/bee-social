const Mongoose = require('mongoose')

const postSchema = new Mongoose.Schema({
  _id: Mongoose.Types.ObjectId,
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



class DataBaseMongoDb {

  constructor(postDb) {
    this.postDb = postDb
  }

  static conectar() {
    Mongoose
      .connect('mongodb://localhost:27017/beeSocial', { useNewUrlParser: true })

    const connection = Mongoose.connection
    connection.once('open', () => console.log('MongoDB Ativo!!'))

    const postModel = Mongoose.model('posts', postSchema)
    return postModel
  }

  async cadastrar(item) {
    const resultCreate = await this.postDb.create(item)
    return resultCreate;
  }

  listar(query, pagination = { limitar: 10, ignorar: 0 }) {
    return this.postDb
      .find(query)
      .skip(pagination.ignorar)
      .limit(pagination.limitar)
  }

}


// async function main() {
//   const postDb = DataBaseMongoDb.conectar()
//   const database = new DataBaseMongoDb(postDb)

//   const item = {
//     "_id": Mongoose.Types.ObjectId("5bb8ce71881ab14faeae5d77"),
//       "userName": "Felipe",
//       "avatarPicture": "assets/images/avatar2.png",
//       "description": "asdasdasda",
//       "groupName": 'programação',
//       "pictures": [
//         {
//           "src": "assets/images/lights.jpg",
//           "alt": "Northern Lights"
//         }
//       ],
//       "likes": 0
//     }

//     const resultCreate = await database.cadastrar(item)
//     console.log('resultCreate', resultCreate)

// }

// main()

module.exports = DataBaseMongoDb;
