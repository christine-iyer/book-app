const router = require('express').Router()
const userController = require('../../controllers/api/user.js')

router.post('/', userController.signUp )
router.put('/:id', userController.updateUser )
router.delete('/:id', userController.deleteUser )
router.get('/:id', userController.getUser )
router.get('/', userController.listUsers )

module.exports = router