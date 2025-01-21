require('dotenv').config()
const mongoose = require('mongoose')

const connectdb = async () => {
     try {
          const on = await mongoose.connect(process.env.MONGO_URI)
          console.log("Connecteds to the database")

     } catch (error) {
          console.log(`message: ${error} `)
          throw error

     }
}

module.exports = connectdb
