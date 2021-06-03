const express = require('express');

const { createProduct ,
    deleteProduct,
	updateProduct,} = require('../controllers/product');

const productRouter = express.Router();


productRouter.post('/create/product', createProduct);
productRouter.put('/manage/prodcut',updateProduct)
productRouter.delete('/manage/prodcut',deleteProduct)

module.exports = {productRouter}