const express = require('express');

const { createProduct ,pendingApproval ,manageProduct} = require('../controllers/product');

const productRouter = express.Router();

productRouter.post('/create/product', createProduct);
productRouter.get('/products/approval', pendingApproval);
productRouter.get('/manage/product', manageProduct);


module.exports = productRouter;