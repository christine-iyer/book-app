const router = require('express').Router()
const userController = require('../../controllers/api/user.js')

router.post('/signup', userController.signUp )
router.put('/:id', userController.updateUser )
router.delete('/:id', userController.deleteUser )
router.get('/', userController.getUsers )

module.exports = router