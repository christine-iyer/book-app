require("dotenv").config();
const { get } = require('mongoose')
const Review = require("../../models/review");

const writeReview = async (req, res) => {
  try {
    const { title, author, text, genre, rating } = req.body;
    if (!title || !author || !text || !genre || rating === undefined) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const bookReview = new Review({ title, author, text, genre, rating });
    await bookReview.save();
    res.status(201).json({ message: "Review created", data: bookReview });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const editReview = async (req, res) => {
  const { id } = req.params;
  const { text, author, genre, title, rating } = req.body;
  try {
    const updatedReview = await Review.findByIdAndUpdate(
      id,
      { title, author, text, genre, rating },
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
    const reviews = await Review.find();
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
  const { like } = req.body;
  try {
    const likedReview = await Review.findByIdAndUpdate(
      id,
      { like },
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

module.exports = {
  writeReview,
  editReview,
  deleteReview,
  listReviews,
  getReview,
  likeReview,
};
