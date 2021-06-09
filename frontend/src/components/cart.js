import React, { useContext, useState,useEffect } from 'react';
import { CartContext } from './../contexts/cart';
import axios from 'axios'


const Cart = () => {
    const [cartData, setCartData] = useState([])
    const cartContext = useContext(CartContext);
    let found = ''
    const arr = []

    useEffect(() => {
        axios
        .get("http://localhost:5000/main")
        .then((result) => {
            found = result.data.find((elem) => {
                return elem._id === cartContext.productId
            })
            setCartData([...cartData, found])
        })
        .catch((err) => {
            throw err
        })
      }, []);
    
    console.log(cartData);
    return (

        <>
            {cartData.map((elem) => {
                return <div>
                    <p> {elem.props.item.title}</p>
                    <p> {elem.props.item.quantity}</p>
                    <p> {elem.props.item.price}</p>
                </div>
            })
            }
        </>
    )
}
export default Cart;
