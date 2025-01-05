const Profile = require('../../models/profile')

// Display Profile page route
const userProfile = async (req, res) => {
    res.send(`Displaying user Profile page`)
}

// Create Profile page route 
const creatProfile = async (req, res) => {
    try {
        const {
            date,
            email,
            DOB,
            username,
            name,
            favGenre,
            location,
            photo,
            userReviews,
            read,
            wishlist,
            favBooks,
            following,
            followers } = req.body
        //Check if required filled are complete
        if (!email || !username || !DOB) {
            return res.status(400).json({ message: 'All fields with * must be filled out' })
        }

        // Check if username or email is already in use
        const existingUser = await Profile.findOne({ $or: [{ username }, { email }] })
        if (existingUser) {
            return res.status(400).json({ message: 'Opps. That username or email already exists.' })
        }

        // Create Profile 
        const newProfile = new Profile({
            date,
            email,
            DOB,
            username,
            name,
            favGenre,
            location,
            photo,
            userReviews,
            read,
            wishlist,
            favBooks,
            following,
            followers
        })
        const savedProfile = await newProfile.save()
        res.status(201).json(savedProfile)
    }
    catch (error) {
        console.error('Error creating profile', error)
        res.status(500).json({ message: 'Internal Server Error' })
    }
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
