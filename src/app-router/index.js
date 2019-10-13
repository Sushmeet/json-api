const express = require('express')
const router = express.Router()

const { home } = require('../controllers/home');
const { createProduct, getProducts } = require('../controllers/products.js')


router.get('/', home)
router.get('/v1/products', getProducts);
router.post('/v1/products', createProduct);

module.exports = router