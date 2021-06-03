const express = require("express");


const { createProduct ,
    deleteProduct,
	updateProduct,getProductToHistory,getAllProducts } = require('../controllers/product');

const productRouter = express.Router();


productRouter.post('/create/product', createProduct);
productRouter.put('/manage/prodcut',updateProduct);
productRouter.delete('/manage/prodcut',deleteProduct);
productRouter.get("/product/history", getProductToHistory);
productRouter.get("/home", getAllProducts);

module.exports = productRouter







