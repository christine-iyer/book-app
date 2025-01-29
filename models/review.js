const { Schema, model } = require('mongoose')

const reviewSchema = new Schema({
     userId: {type: Mongoose.Schema.Types.ObjectId, ref: "User", requires: true },
     title: {type: String, required: true},
     author: {type: String},
     text: {type: String},
     genre: {type: String},
     rating: {type: Number}, 
     comment: {type: String, required: false},
     like: {type: Number, required: false}, 
     
     
},
{timestamps:true})

const Review = model('Review', reviewSchema)
module.exports = Review