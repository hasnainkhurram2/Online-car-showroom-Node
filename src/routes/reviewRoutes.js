const express = require("express");
const ReviewController = require("./../controller/reviewController");

const router = express.Router();

router
  .route("/")
  .get(ReviewController.getAllReviews) //admin
  .post(ReviewController.createReview);

router
  .route("/:id")
  .get(ReviewController.getReview)
  .patch(ReviewController.updateReview)
  .delete(ReviewController.deleteReview);

module.exports = router;
