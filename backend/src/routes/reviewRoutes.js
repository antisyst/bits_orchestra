const express = require("express");
const router = express.Router();
const reviewsController = require("../controllers/reviewsController");

router.get("/:productId", reviewsController.getReviewsByProductId);

router.post("/", reviewsController.addReview);

module.exports = router;
