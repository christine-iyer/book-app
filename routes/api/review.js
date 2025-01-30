const router = require('express').Router()
const reviewController = require('../../controllers/api/review.js')
// username/review/:id
router.post('/', reviewController.writeReview )
router.put('/:id', reviewController.editReview )
router.delete('/:id', reviewController.deleteReview )
router.get('/:id', reviewController.getReview )
router.get('/', reviewController.listReviews )
//not sure how to write this route


module.exports = router