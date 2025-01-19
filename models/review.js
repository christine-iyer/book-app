const { Schema, model } = require('mongoose')

const reviewSchema = new Schema({
     reviewId: {type: String}, 
     review: {type: String, required: true}, 
     comment: {type: String, required: false},
     category: {type: String, required: true},
     like: {type: Number, required: false}, 
     rating: {type: Number, required: true}, 
     username: {type: Schema.ObjectId, ref: "User"}
}, 
{timestamps:true})

const Review = model('Review', reviewSchema)
module.exports = Review