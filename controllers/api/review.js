require('dotenv').config()

const { get } = require('mongoose')
const Review = require('../../models/Review')

const writeReview = async (req, res, next) => {
     try {
          const {title,text, genre, comment,like, rating, username} = req.body
          const bookReview = new Review({title,text, comment, genre, like, rating, username})     
          await bookReview.save()
          res.status(201).json({message: "Review created"})
          }
     catch(err){
          res.status(400).json({message: err.message})
     }
}
const editReview = async (req, res, next) => {
     const { id } = req.params
     const { text, comment, genre, like, rating } = req.body   
     try {
          const updatedReview = await Review.findByIdAndUpdate(
               id,
               { title, text, genre,  rating, comment, like },   
               { new: true, runValidators: true }             
          )
          
     } catch (error) {
          res.status(400).json({message: error.message})
          
     }
}
const deleteReview = async (req, res, next) => {
     try {
          const deletedReview = await Review.findByIdAndDelete(req.params.id)
          res.locals.data.review = deletedReview
          next()
          
     } catch (error) {
          res.status(400).json({message: error.message})
     }
}
const listReviews = (req, res) => {
     res.json(res.locals.data.reviews)
 }
const getReview = (req, res) => {
     res.json(res.locals.data.review)
 }

const likeReview = async (req, res, next) => {
     try {
          
     } catch (error) {
          res.status(400).json({message: error.message})
     }
}    
module.exports = { writeReview, editReview, deleteReview, listReviews, getReview, likeReview }