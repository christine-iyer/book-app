const router = require('express').Router()
const profileController = require('../../controllers/api/profileController')

// Display Profile page route
router.get('/:profileId', profileController.userProfile)

// Create Profile page route 
router.post('/', profileController.creatProfile)

// Edit Profile page route
router.put('/:profileId', profileController.editProfile)

// Delete Profile page route 
router.delete('/:profileId', profileController.deleteProfile)

module.exports = router 