const express = require("express");
const productRouter = express.Router();

const { createProduct ,
    deleteProduct,
	updateProduct,getProductToHistory,getAllProducts,pendingApproval  } = require('../controllers/product');


productRouter.post('/create/product', createProduct);
productRouter.get('/products/approval', pendingApproval);
productRouter.put('/manage/product',updateProduct);
productRouter.delete('/manage/product',deleteProduct);
productRouter.get("/product/history", getProductToHistory);
productRouter.get("/home", getAllProducts);



module.exports = productRouter







