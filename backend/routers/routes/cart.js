const express = require("express");
const authentication = require("./../middlewares/authentication");
const { showCart, sendToCart, deleteItem } = require("../controllers/cart");

const cartRouter = express.Router();

cartRouter.get("/show/cart", showCart);
cartRouter.delete("/show/cart/deleted", deleteItem);
// cartRouter.post("/cart", authentication, sendToCart);
cartRouter.post("/cart", sendToCart);

module.exports = cartRouter;
