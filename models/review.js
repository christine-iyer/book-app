const { Schema, model } = require('mongoose')

const reviewSchema = new Schema({
     userId: {type:Schema.Types.ObjectId, ref: "User", required: true}, 
     title: {type: String, required: true },
     review: {type: String, required: true}, 
     comment: {type: String, required: false},
     category: {type: String, required: true},
     like: {type: Number, required: false}, 
     rating: {type: Number}
}, 
{timestamps:true})

const Review = model('Review', reviewSchema)
module.exports = Review