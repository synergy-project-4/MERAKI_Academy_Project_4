const express = require('express');

const { createProduct} = require('../controllers/product');

const productRouter = express.Router();

productRouter.post('/create/product', createProduct);

module.exports = productRouter;