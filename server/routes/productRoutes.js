const express = require('express');
const router = express.Router();
const { getProducts, getCategoryProducts } = require('../controller/productController');
const { verifyToken } = require('../middleware/auth');

router.get('/list', verifyToken, getProducts);
router.get('/list-category', getCategoryProducts, verifyToken);

module.exports = router;