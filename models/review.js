const mongoose = require('mongoose'); // Import Mongoose
const { Schema, model } = mongoose; // Destructure Schema and model from mongoose

const reviewSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true }, // Fix "requires" typo
    title: { type: String, required: true },
    author: { type: String },
    text: { type: String },
    genre: { type: String },
    rating: { type: Number },
    images: { type: [String], required: false, default:[] },
    like: { type: Number},
    comments: [commentSchema],
}, { timestamps: true });

const Review = model('Review', reviewSchema);
module.exports = Review;
