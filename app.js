require('dotenv').config()

const express = require('express')
const cors = require("cors");
const morgan = require('morgan')
const userRoutes = require('./routes/api/user')
const profileRoutes = require('./routes/api/profile')
const reviewRoutes = require('./routes/api/review')
const authRoutes = require('./routes/api/authRoutes')

const app = express()
app.use(cors())
app.use(morgan('tiny'));
app.use(express.json())
app.use(express.urlencoded({ extended: false })); 
app.use('/api/auth', authRoutes )
app.use('/api/user', userRoutes )
app.use('/api/review', reviewRoutes )
app.use('/api/profile', profileRoutes)

app.get('*', (req, res) => {
    res.send(" i am here")
})

module.exports = app