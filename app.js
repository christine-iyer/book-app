require('dotenv').config()

const express = require('express')
const morgan = require('morgan')
const userRoutes = require('./routes/api/user')
<<<<<<< Updated upstream
const profileRoutes = require('./routes/api/profile')
=======
const reviewRoutes = require('./routes/api/review')

>>>>>>> Stashed changes

const app = express()

app.use(morgan('tiny'));
app.use(express.json())
<<<<<<< Updated upstream
=======
app.use('/api/user', userRoutes )
app.use('/api/review', reviewRoutes )
>>>>>>> Stashed changes

app.use('/api/user', userRoutes)
app.use('/api/profile', profileRoutes)

app.get('*', (req, res) => {
    res.send(" i am here")
})

module.exports = app