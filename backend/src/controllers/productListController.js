const db = require('../db');

exports.getAllProducts = (req, res) => {
  res.json(db.products);
};

exports.getProductById = (req, res) => {
  const productId = parseInt(req.params.id);
  const product = db.products.find((product) => product.id === productId);

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  res.json(product);
};
