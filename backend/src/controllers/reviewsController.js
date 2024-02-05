const Review = require('../models/Review');

exports.getReviewsByProductId = async (req, res) => {
  try {
    const productId = parseInt(req.params.productId);
    const reviews = await Review.getReviewsByProductId(productId);
    res.json(reviews);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.addReview = async (req, res) => {
  try {
    const { productId, author, comment } = req.body;

    if (!productId || !author || !comment) {
      return res.status(400).json({ message: 'Please provide all required fields' });
    }

    const newReview = await Review.addReview(productId, author, comment);

    res.status(201).json(newReview);
  } catch (error) {
    console.error('Error adding review:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
