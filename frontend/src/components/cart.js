import React, { useContext } from 'react';
import { CartContext } from './../contexts/cart';
import axios from 'axios'


const Cart = async () => {
    const cartContext = useContext(CartContext);
 /*   await axios
        .get("http://localhost:5000/main")
        .then((result) => {
            console.log("result", result);
            result.find((elem) => {
                return elem._id == cartContext.productId
            })
                .catch((err) => {
                    throw err
                })
        })*/

    return (
        <>
        <p>Cart</p>
        </>
    )
}

export default Cart;
