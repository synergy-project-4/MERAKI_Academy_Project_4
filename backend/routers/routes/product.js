const express = require("express");

const { createProduct,getProductToHistory,getAllProducts } = require("../controllers/product");

const productRouter = express.Router();

productRouter.post("/create/product", createProduct);
productRouter.get("/product/history", getProductToHistory)
productRouter.get("/home", getAllProducts);

module.exports = productRouter;
