const { Schema, model } = require('mongoose')

const reviewSchema = new Schema({
     title: {type: Schema.ObjectId, ref: "Book"},
     author: {type: String, required: true},
     text: {type: String, required: true},
     genre: {type: String, required: true},
     rating: {type: Number, required: true}, 
     username: {type: Schema.ObjectId, ref: "User"},
     comment: {type: String, required: false},
     like: {type: Number, required: false}, 
     
     
},
{timestamps:true})

const Review = model('Review', reviewSchema)
module.exports = Review