const mongoose = require('mongoose')
const { Schema, model } = mongoose
// Destructures Schema and model from mongoose to make the syntax cleaner.
// Schema: Used to define the structure of a document in MongoDB.
// model: Used to create and interact with the database collection based on a schema.

// Define comment schema
const commentSchema = new Schema({
    body: { type: String, required: true }, // Text of the comment
    date: { type: Date, default: Date.now }, // Creation date of the comment
});



// profileSchema defines the structure and validation rules for Profile documents in MongoDB.
const profileSchema = new Schema({
    date: { type: Date, default: Date.now }, //Represents the date when the profile is created.
    DOB: { type: String, required: true }, // Represents the user's date of birth.
    username: { type: String, required: true, unique: true, index: true }, //Represents the user's username.
    name: {
        first: { type: String, required: true, index: true },
        last: { type: String, index: true }
    }, //Represents the user's full name, stored as a nested object
    favGenre: { type: String, default: 'Unknown' },  // Represents the user's favorite genre (e.g., "fiction").
    location: { type: String, default: 'Not Specified' }, // Represents the user's location.
    photo: { type: String, required: true }, //Represents the URL or path to the user's profile picture.
    userReviews: [
        {
            body: { type: String, required: true }, // The main text of the review
            date: { type: Date, default: Date.now }, // The creation date of the review
            likes: { type: Number, default: 0, min: 0 }, // Number of likes on the review
            comments: [commentSchema],
        }],
    default: [], // Represents an array of reviews submitted by the user. Each review contains: a body, date , comments 
    read: [{ type: Schema.Types.ObjectId, ref: 'Book' }], default: [], //Represents an array of books the user has read.
    wishlist: [{ type: Schema.Types.ObjectId, ref: 'Book' }], default: [], // Represents an array of books the user wants to read.
    favBooks: [{ type: Schema.Types.ObjectId, ref: 'Book' }], default: [], // Represents an array of the user's favorite books.
    following: [{ type: Schema.Types.ObjectId, ref: 'Profile' }], default: [], // Represents an array of other profiles the user is following.
    followers: [{ type: Schema.Types.ObjectId, ref: 'Profile' }], default: [], // Represents an array of profiles that follow the user.
}, { timestamps: true })

// Export the Profile model
module.exports = model('Profile', profileSchema)