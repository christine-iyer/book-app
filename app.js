require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const userRoutes = require('./routes/api/user')
const reviewRoutes = require('./routes/api/review')
const profileRoutes = require('./routes/api/profile')

const app = express()

app.use(morgan('tiny'));
app.use(express.json())

app.use('/api/user', userRoutes)
app.use('/api/review', reviewRoutes)
app.use('/api/profile', profileRoutes)

app.get('*', (req, res) => {
    res.send(" i am here")
})

module.exports = app