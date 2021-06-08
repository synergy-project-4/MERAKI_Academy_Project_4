import React, { useContext, useState } from 'react';
import { CartContext } from './../contexts/cart';
import axios from 'axios'


const Cart = () => {
    const [cartData, setCartData] = useState([])
    const cartContext = useContext(CartContext);
    let found = ''
    const arr = []

    axios
        .get("http://localhost:5000/main")
        .then((result) => {
       found= result.data.find((elem) => {
                return elem._id === cartContext.productId
            })
            setCartData([found])
        })
        .catch((err) => {
            throw err
        })
        console.log(cartData);
  /*  arr.push(found)
    setCartData(arr)*/
    return (
        
        <>
          <h1>test:: {cartData[0].title}</h1>
        </>
    )
}

export default Cart;
