const express = require("express");
const productRouter = express.Router();

const {
  createProduct,
  deleteProduct,
  updateProduct,
  getProductToHistory,
  getAllProducts,
  pendingApproval,
  searchProduct,
  filterProduct,
} = require("../controllers/product");

productRouter.post("/create/product", createProduct);
productRouter.get("/products/approval", pendingApproval);
productRouter.put("/manage/product", updateProduct);
productRouter.delete("/manage/product", deleteProduct);
productRouter.get("/product/history", getProductToHistory);
productRouter.get("/home", getAllProducts);
productRouter.get("/search/product", searchProduct);
productRouter.get("/filter/product", filterProduct);

module.exports = productRouter;
