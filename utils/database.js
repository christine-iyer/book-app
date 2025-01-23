require('dotenv').config()
const mongoose = require('mongoose')

const connectdb = async () => {
     try {
          const on = await mongoose.connect(process.env.MONGO_URI, {
               useNewUrlParser: true,
               useUnifiedTopology: true,
               useCreateIndex: true,
               useFindAndModify: false
          })
          console.log("Connected to the database")

     } catch (error) {
          console.log(`message: ${error} `)
          process.exit(1); 

     }
}

module.exports = connectdb
