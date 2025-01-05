const { Schema, model } = require('mongoose')

const reviewSchema = new Schema({
     reviewId: {type: String}, 
     review: {type: String}, 
     comment: {type: String},
     category: {type: String, required: true},
     like: {type: Number}, 
     rating: {type: Number}, 
     username: {type: Schema.ObjectId, ref: "User"}
}, 
{timestamps:true})

const Review = model('Review', reviewSchema)
module.exports = Review