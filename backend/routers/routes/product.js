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
  getRejectedProduct,
  rejectedProduct,
  approveProduct
} = require("../controllers/product");
const productRouter = express.Router();
const authentication = require("./../middlewares/authentication");

productRouter.post("/create/product", authentication, createProduct);
productRouter.get("/products/approval", authentication, pendingApproval);
productRouter.get("/home/admin", authentication, pendingApproval);
productRouter.put("/manage/product", updateProduct);
productRouter.delete("/manage/product", authentication, deleteProduct);
productRouter.get("/product/history", authentication, getProductToHistory);
productRouter.get("/main", getAllProducts);
productRouter.get("/search/product", searchProduct);
productRouter.get("/filter/product", filterProduct);
productRouter.get("/product/rejected",   getRejectedProduct);
productRouter.put("/rejected",   rejectedProduct);
productRouter.put("/approve",   approveProduct);




module.exports = productRouter;
