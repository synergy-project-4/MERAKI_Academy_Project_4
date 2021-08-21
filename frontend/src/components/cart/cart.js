import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { CartContext } from "../../contexts/cart";
import { LoginContext } from "../../contexts/login";
import "./cart.css";

const Cart = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [done, setDone] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const loginContext = useContext(LoginContext);

  useEffect(async () => {
    let userId = loginContext.userIdLoggedIn;
    await axios
      .get(`http://localhost:5000/show/cart/${userId}`)
      .then((result) => {
        setCartItems(result.data);
        setDone(true);
      })
      .catch((err) => {});
  }, []);

  useEffect(() => {
    // if (done) {
    let result = cartItems.reduce((acc, elem) => {
      return acc + elem.price;
    }, 0);
    setTotal(result);

    // }
  }, [done]);

  // const getTotal = () => {
  //   let result = cartItems.reduce((acc, elem) => {
  //     return acc + elem.price;
  //   }, 0);
  //   setTotal(result);
  // };

  return (
    <>
      <div className="cart_main_body">
        {cartItems.map((elem) => {
          let count = 1;
          return (
            <div className="cart_body" key={elem._id}>
              <div>
                <img className="product-img" src={elem.image}></img>
              </div>
              <div className="cart_infos">
                <p className="title">{elem.title} </p>
                <p className="info">Description : {elem.shortDescription}</p>
                <p className="info">Located in : {elem.location}</p>
                <p className="price">In Stock : {elem.quantity}</p>
                <p className="price">Price : {elem.price}$</p>
              </div>
              <div className="quantity_buttons">
                <button>&nbsp;+&nbsp;</button>
                <p>{quantity}</p>
                <button>&nbsp;-&nbsp;</button>
              </div>
              <div>
                <button className="delete_item">Delete</button>
              </div>
              <div></div>
            </div>
          );
        })}
      </div>
      <div className="checkout">
        <p>{total}$</p>
        <button className="buy-button">Buy</button>
      </div>
    </>
  );
};

export default Cart;
