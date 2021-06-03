const express = require("express");





const { createProduct ,
    deleteProduct,
	updateProduct,
    getProductToHistory
    ,getAllProducts,
    pendingApproval ,
    manageProduct,
    searchProduct,
    filterProduct, } = require('../controllers/product');


const productRouter = express.Router();


productRouter.post('/create/product', createProduct);
productRouter.get('/products/approval', pendingApproval);
productRouter.get('/manage/product', manageProduct);
productRouter.put('/manage/prodcut',updateProduct);
productRouter.delete('/manage/prodcut',deleteProduct);
productRouter.get("/product/history", getProductToHistory);
productRouter.get("/home", getAllProducts);
productRouter.get("/search/product", searchProduct)
productRouter.get("/filter/product", filterProduct)
module.exports = productRouter







