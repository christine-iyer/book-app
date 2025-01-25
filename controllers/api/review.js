require('dotenv').config()

const { get } = require('mongoose')
const Review = require('../../models/review')

const writeReview = async (req, res, next) => {
     try {
          const {title,author,text, genre,  rating} = req.body
          const bookReview = new Review({title,author,text, genre,  rating})     
          await bookReview.save()
          res.status(201).json({message: "Review created"})
          }
     catch(err){
          res.status(400).json({message: err.message})
     }
}
const editReview = async (req, res, next) => {
     const { id } = req.params
     const { text, author, genre, title, rating } = req.body   
     try {
          const updatedReview = await Review.findByIdAndUpdate(
               id,
               { title,author,text, genre,  rating },   
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
const listReviews = async (req, res, next) => {
     try {const reviews = await Review.find()
          res.locals.data.reviews = reviews
          
     } catch (error) {
          res.status(400).json({message: error.message})
          
     }
   
 }
const getReview = async(req, res) => {
     const { id } = req.params
     try {
          const review = await Review.findById(id)
          if (!review) {
               return res.status(404).json({ message: "Review not found" })
          }
          
     } catch (error) {
          res.status(400).json({message: error.message})
          
     }
     res.json(res.locals.data.review)
 }

const likeReview = async (req, res, next) => {
     try {
          
     } catch (error) {
          res.status(400).json({message: error.message})
     }
}    
module.exports = { writeReview, editReview, deleteReview, listReviews, getReview, likeReview }