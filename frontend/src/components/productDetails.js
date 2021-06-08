import React, { useContext, useState } from "react";
import { LoginContext } from "./../contexts/login";
import { useHistory } from "react-router-dom";
import CartContext from './../contexts/cart'
import "./product.css";

const ProductDetails = (props) => {
    const cartContext = useContext(CartContext);
  const loginContext = useContext(LoginContext);
  const [notLogged, setNotLogged] = useState(false);
  const [logged, setLogged] = useState(false);
  let history = useHistory();

  const loginR = () => {
    if (loginContext.token) {
      setNotLogged(false);
      setLogged(true);
       cartContext.setProductId(props.item._id)
    } else {
      {
        setLogged(false);
        setNotLogged(true);
      }
    }
  };
  return (
    <>
      <div className="itemDetails">
        <div key={props.item._id}>
          <p className="title">
            {props.item.title} ({props.item.shortDescription})
          </p>
          <p className="info">Tags : {props.item.tags}</p>
          <p className="info">Description :{props.item.description}</p>
          <p className="info">Located in: {props.item.location}</p>
          <p className="price">In Stock : {props.item.quantity}</p>
          <p className="price">price : {props.item.price}$</p>
        </div>
        <div className="add-button">
          <button onClick={loginR}>Add to cart</button>
          {props.item.optionsToExchange && <button>Exchange</button>}
          <button onClick={history.goBack}>Go Back</button>
        </div>
        <div>
          {notLogged ? <p className="failMessage">You must login</p> : ""}
          {logged ? <p className="successMessage">Added to cart</p> : ""}
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
