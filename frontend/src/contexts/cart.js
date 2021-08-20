import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export const CartContext = React.createContext();

const CartProvider = (props) => {
  const state = {
   
  };
 
  return (
    <CartContext.Provider value={state}>{props.children}</CartContext.Provider>
  );
};

export default CartProvider;
