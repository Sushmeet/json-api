const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = require('./src/app-router/index')


// Middleware 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes registeration
app.use('/', router);


module.exports = app;