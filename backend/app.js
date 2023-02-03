const express = require('express');
const app = express();

const errorMidleware = require('./middlewares/errors');

app.use(express.json());


// Import All Routes
const products = require('./routes/product');

app.use('/api/v1', products);

// Middleware to handle errors
app.use(errorMidleware);

module.exports = app