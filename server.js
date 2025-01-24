require('dotenv').config()
const connectdb = require('./utils/database.js')
const app = require('./app.js')


const PORT = process.env.PORT || 3001

connectdb()
     .then(() => {
          app.listen(PORT, () => {
               console.log(`Here I sit on the number ${PORT} hydrant`)
          })

     })
     .catch((error) => {
          console.log(`Failed to connect to database `)
     }
     )
