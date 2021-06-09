import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from './../contexts/cart';
import { CreateProductContext } from './../contexts/createProduct'
import { LoginContext } from "./../contexts/login";
import axios from 'axios'


const Cart = (props) => {
    const cartContext = useContext(CartContext);
    const loginContext = useContext(LoginContext)

    const increase =()=>{
        
    }
    const decrease =()=>{
        
    }

    const found = cartContext.showData.filter((elem) => {
        return elem.userId === loginContext.userIdLoggedIn
    })
    const find = found.filter((elem, i) => {
        return elem.userId === loginContext.userIdLoggedIn
    })
const findA=find.map((elem)=>{
    return elem.product
})
    return (
        <>
            <div>
                {findA.map((elem, i) => {
                    return (
                        <div key={elem[0]._id} >
                            <p>{elem[0].title} </p>
                            <p>Located in : {elem[0].location}</p>
                            <button onClick={increase}>+</button>
                            <p>In Stock : {elem[0].quantity}</p>
                            <button onClick={decrease}>-</button>
                            <p>Price : {elem[0].price}</p>
                            <button>Buy</button>
                        </div>
                    );
                })}
            </div>
        </>
    )

}
export default Cart;
