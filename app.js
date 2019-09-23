const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const { home } = require('./src/controllers/home');
const { createProduct, getProducts } = require('./src/controllers/products.js')

// Middleware 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get('/', home)
app.get('/v1/products', getProducts);
app.post('/v1/products', createProduct);


module.exports = app;