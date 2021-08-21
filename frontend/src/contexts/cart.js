import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { LoginContext } from "./login";
import axios from "axios";
// import { ItemCartContext } from "./productDetails";

export const CartContext = React.createContext();

const CartProvider = (props) => {
  const [productId, setProductId] = useState("");
  const [userId, setUserId] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const loginContext = useContext(LoginContext);
  // const itemCartContext = useContext(ItemCartContext);
  let history = useHistory();
  const state = {
    sendToCart,
    setProductId,
    showCart,
    deleteItem,
    cartItems,
  };

  async function sendToCart(productId) {
    await axios
      .post("http://localhost:5000/cart", {
        productId,
        userId: loginContext.userIdLoggedIn,
      })
      .then((result) => {})
      .catch((err) => {});
  }

  async function showCart() {
    let userId = loginContext.userIdLoggedIn;

    history.push("/show/cart");
  }

  async function deleteItem() {
    await axios
      .delete(
        "http://localhost:5000/show/cart/deleted",
        {
          productId,
          userId,
        },
        {
          headers: {
            Authorization: `Bearer ${loginContext.token}`,
          },
        }
      )
      .then((result) => {})
      .catch((err) => {});
  }

  return (
    <CartContext.Provider value={state}>{props.children}</CartContext.Provider>
  );
};

export default CartProvider;
