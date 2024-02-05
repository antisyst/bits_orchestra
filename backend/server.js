const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const db = require('./src/db');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(cors());

app.use(express.static(path.join(__dirname, 'wwwroot')));

app.get('/api/check', (req, res) => {
  res.json({ message: 'Hello, Server is working!' });
});

app.get('/api/products', (req, res) => {
  res.json(db.products);
});

app.get('/api/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = db.products.find((p) => p.id === productId);

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  res.json(product);
});

app.get('/api/reviews/:productId', (req, res) => {
  const productId = parseInt(req.params.productId);
  const reviews = db.reviews.filter((review) => review.productId === productId);
  res.json(reviews);
});

app.post('/api/reviews', (req, res) => {
  const { productId, author, comment } = req.body;

  if (!productId || !author || !comment) {
    return res.status(400).json({ message: 'Please provide all required fields' });
  }

  const newReview = {
    id: db.reviews.length + 1,
    productId,
    author,
    comment,
  };

  db.reviews.push(newReview);
  res.status(201).json(newReview);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'wwwroot', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
