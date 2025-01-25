const { Schema, model } = require('mongoose')

const reviewSchema = new Schema({
     title: {type: String},
     author: {type: String},
     text: {type: String},
     genre: {type: String},
     rating: {type: Number}, 
     username: {type: Schema.ObjectId, ref: "User"},
     comment: {type: String, required: false},
     like: {type: Number, required: false}, 
     
     
},
{timestamps:true})

const Review = model('Review', reviewSchema)
module.exports = Review