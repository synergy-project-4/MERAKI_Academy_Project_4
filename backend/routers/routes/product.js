const express = require("express");

const { createProduct, getAllProducts } = require("../controllers/product");

const productRouter = express.Router();

productRouter.post("/create/product", createProduct);
productRouter.get("/home", getAllProducts);

module.exports = productRouter;
