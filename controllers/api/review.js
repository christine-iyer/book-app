require("dotenv").config();
const { get } = require('mongoose')
const Review = require("../../models/review");
const User = require("../../models/user")
const Comment = require("../../models/comment");

const writeReview = async (req, res) => {
  try {
    const { userId,title, author, text, genre, rating, images } = req.body;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }
    const bookReview = new Review({ userId, title, author, text, genre, rating, images });
    await bookReview.save();
    res.status(201).json({ message: "Review created", data: bookReview });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const editReview = async (req, res) => {
  const { id } = req.params;
  const { text, author, genre, title, rating, images } = req.body;
  try {
    const updatedReview = await Review.findByIdAndUpdate(
      id,
      { title, author, text, genre, rating, images },
      { new: true, runValidators: true }
    );
    if (!updatedReview) {
      return res.status(404).json({ message: "Review not found" });
    }
    res.status(200).json({ message: "Review updated", data: updatedReview });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteReview = async (req, res) => {
  try {
    const deletedReview = await Review.findByIdAndDelete(req.params.id);
    if (!deletedReview) {
      return res.status(404).json({ message: "Review not found" });
    }
    res.status(200).json({ message: "Review deleted", data: deletedReview });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const listReviews = async (req, res) => {
  try {
    const reviews = await Review.find().populate('userId', 'username');
    reviews.reverse()
    res.status(200).json({ data: reviews });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getReview = async (req, res) => {
  const { id } = req.params;
  try {
    const review = await Review.findById(id);
    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }
    res.status(200).json({ data: review });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const likeReview = async (req, res) => {
  const { id } = req.params;
  try {
    const likedReview = await Review.findByIdAndUpdate(
      id,
      {$inc:{like:1} },
      { new: true, runValidators: true }
    );
    if (!likedReview) {
      return res.status(404).json({ message: "Review not found" });
    }
    res.status(200).json({ message: "Review liked", data: likedReview });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
  };
  // Add a comment to a review
async function addComment(reviewId, userId, commentText) {
  const review = await Review.findById(reviewId);
  if (!review) throw new Error('Review not found');

  review.comments.push({ userId, text: commentText });
  await review.save();
  return review;
}
// Add a reply to a comment
async function addReply(reviewId, commentId, userId, replyText) {
  const review = await Review.findById(reviewId);
  if (!review) throw new Error('Review not found');

  const comment = review.comments.id(commentId);
  if (!comment) throw new Error('Comment not found');

  comment.replies.push({ userId, text: replyText });
  await review.save();
  return review;
}
// Get a review with populated comments
async function getReviewWithComments(reviewId) {
  const review = await Review.findById(reviewId)
      .populate('userId', 'name') // Populate review creator
      .populate('comments.userId', 'name'); // Populate comment creators

  if (!review) throw new Error('Review not found');
  return review;
}
module.exports = {
  writeReview,
  editReview,
  deleteReview,
  listReviews,
  getReview,
  likeReview,
  addComment, 
  addReply, 
  getReviewWithComments
};
