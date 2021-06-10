const express = require("express");
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
const productRouter = express.Router();
const authentication = require("./../middlewares/authentication");

productRouter.post("/create/product", authentication, createProduct);
productRouter.get("/products/approval", authentication, pendingApproval);
productRouter.get("/home/admin", authentication, pendingApproval);
productRouter.put("/manage/product", authentication, updateProduct);
productRouter.delete("/manage/product", authentication, deleteProduct);
productRouter.get("/product/history", authentication, getProductToHistory);
productRouter.get("/main", getAllProducts);
productRouter.get("/search/product", searchProduct);
productRouter.get("/filter/product", filterProduct);

module.exports = productRouter;
