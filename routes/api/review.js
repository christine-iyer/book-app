const router = require('express').Router()
const reviewController = require('../../controllers/api/review.js')
// username/review/:id
router.post('/', reviewController.writeReview )
router.put('/:id', reviewController.editReview )
// Route to like a review
router.post('/:id/like', reviewController.likeReview);
router.delete('/:id', reviewController.deleteReview )
router.get('/:id', reviewController.getReview )
router.get('/', reviewController.listReviews )
//not sure how to write this route


module.exports = router