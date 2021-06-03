const express = require("express");

const {
  createProduct,
  deleteProduct,
  updateProduct,
  getProductToHistory,
  getAllProducts,
  pendingApproval,
  manageProduct,
} = require("../controllers/product");

const productRouter = express.Router();

productRouter.post("/create/product", createProduct);
productRouter.get("/products/approval", pendingApproval);
productRouter.get("/manage/product", manageProduct);
productRouter.put("/manage/prodcut", updateProduct);
productRouter.delete("/manage/prodcut", deleteProduct);
productRouter.get("/product/history", getProductToHistory);
productRouter.get("/home", getAllProducts);

module.exports = productRouter;
