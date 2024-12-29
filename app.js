const express = require('express')
const morgan = require('morgan')
require('dotenv').config()
const userRoutes = require('./routes/api/user')

const app = express()


 app.use(morgan('tiny'));

app.use(express.json())
app.use('/api/user', userRoutes )

// app.use((req, res, next) => {
//      res.send("Hello, connection buddies.")
// })
app.get('*', (req, res) => {
     res.send(" i am here")
 })

module.exports = app