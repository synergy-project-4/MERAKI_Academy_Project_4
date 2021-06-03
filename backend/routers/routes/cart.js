const express = require("express");

const { showCart, sendToCart } = require("../controllers/cart");

const cartRouter = express.Router();

cartRouter.get("/cart", showCart);
cartRouter.post("/cart", sendToCart);

module.exports = cartRouter;
