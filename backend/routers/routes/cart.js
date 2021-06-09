const express = require("express");
const authentication = require('./../middlewares/authentication');
const { showCart, sendToCart } = require("../controllers/cart");

const cartRouter = express.Router();

cartRouter.get("/show/cart",  showCart);
cartRouter.post("/cart", authentication, sendToCart);

module.exports = cartRouter;
