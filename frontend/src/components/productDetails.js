import React, { useContext, useState } from "react";
import { LoginContext } from "./../contexts/login";
import "./product.css";

const ProductDetails = (props) => {
  const loginContext = useContext(LoginContext);
  console.log(loginContext);
  const [notLogged, setNotLogged] = useState(false);
  const [logged, setLogged] = useState(false);

  const loginR = () => {
    if (loginContext.token) {
      setNotLogged(false);
      setLogged(true);
    } else {
      {
        setLogged(false);
        setNotLogged(true);
      }
    }
  };
  return (
    <>
      <div key={props.item._id}>
        <p>{props.item.title}</p>
        <p>{props.item.shortDescription}</p>
        <p>{props.item.tags}</p>
        <p>{props.item.price}</p>
        <p>{props.item.description}</p>
        <p>{props.item.quantity}</p>
        <p>{props.item.location}</p>
      </div>
      <div>
        <button onClick={loginR}>Add to cart</button>
        {props.item.optionsToExchange && <button>Exchange</button>}
      </div>
      <div>
        {notLogged ? <p className="failMessage">You must login</p> : ""}
        {logged ? <p className="successMessage">Added to cart</p> : ""}
      </div>
    </>
  );
};

export default ProductDetails;
