const mongoose = require('mongoose'); // Import Mongoose
const { Schema, model } = mongoose; // Destructure Schema and model from mongoose

const commentSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true }, // User who made the comment
    text: { type: String, required: true }, // Comment text
    likes: { type: Number, default: 0 }, // Number of likes on the comment
    replies: [this], // Nested comments (self-referencing schema)
}, { timestamps: true }); // Automatically add createdAt and updatedAt fields

const Comment = model('Comment', commentSchema); // Create the Comment model
module.exports = Comment; // Export the Comment model for use in other files