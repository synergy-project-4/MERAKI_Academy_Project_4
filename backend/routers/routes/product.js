const express = require("express");

const { createProduct,getProductToHistory } = require("../controllers/product");

const productRouter = express.Router();

productRouter.post("/create/product", createProduct);
productRouter.get("/product/history", getProductToHistory)

module.exports = productRouter;
