class Review {
  constructor(id, productId, author, comment, gmail) {
    this.id = id;
    this.productId = productId;
    this.author = author;
    this.comment = comment;
    this.gmail = gmail;
  }
}

const reviews = [
  new Review(
    1,
    1,
    "John Doe",
    "Installed vinyl planks in my living room and couldn't be happier with the result. They look like real wood but are so much more durable and easy to clean!"
  ),
  new Review(
    2,
    2,
    "Patrick Bateman",
    "The waterproof feature of these vinyl planks is a game-changer! Perfect for kitchens and bathrooms, and the installation was a breeze."
  ),
  new Review(
    3,
    3,
    "Jillian Richard",
    "I love the wide range of designs available for vinyl planks. It allowed me to achieve the exact aesthetic I wanted for my home without breaking the bank."
  ),
  new Review(
    4,
    1,
    "Michelle Velez",
    "The warmth and comfort underfoot with vinyl planks are surprising. It's a great alternative to traditional hardwood, especially for bedrooms."
  ),
];

Review.getReviewsByProductId = (productId) =>
  reviews.filter((review) => review.productId === productId);

Review.addReview = (productId, author, comment, gmail) => {
  const newReview = new Review(
    reviews.length + 1,
    productId,
    author,
    comment,
    gmail
  );
  reviews.push(newReview);
  return newReview;
};

module.exports = Review;
