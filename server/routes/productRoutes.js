const express = require('express');
const router = express.Router();
const { getProducts, getCategoryProducts } = require('../controller/productController');

router.get('/list', getProducts);
router.get('/list-category', getCategoryProducts);

module.exports = router;