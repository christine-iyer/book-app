const router = require('express').Router()
const userController = require('../../controllers/api/user.js')

router.post('/signup', userController.signUp )

module.exports = router