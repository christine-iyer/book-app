const Profile = require('../../models/profile')

// Display Profile page route
const userProfile = async (req, res) => {
    res.send(`Displaying user Profile page`)
}

// Create Profile page route 
const creatProfile = async (req, res) => {
    res.send('create profile page')
}

// Edit Profile page route
const editProfile = async (req, res) => {
    res.send('edit profilde page')
}

// Delete Profile page route 
const deleteProfile = async (req, res) => {
    res.send('delete profile page')
}

module.exports = {
    userProfile,
    creatProfile,
    editProfile,
    deleteProfile
}; 
