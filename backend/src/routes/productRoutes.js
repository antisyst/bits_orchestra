const express = require('express');
const router = express.Router();
const productListController = require('../controllers/productListController');

router.get('/', productListController.getAllProducts);

router.get('/:id', productListController.getProductById);

module.exports = router;
