import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from './../contexts/cart';
import { CreateProductContext } from './../contexts/createProduct'
import { LoginContext } from "./../contexts/login";
import { ItemCartContext } from './../contexts/productDetails'
import axios from 'axios'


const Cart = (props) => {
    const cartContext = useContext(CartContext);
    const loginContext = useContext(LoginContext)
    const itemCartContext = useContext(ItemCartContext);
    console.log("itemCartContext.quantity", itemCartContext.quantity);
    let subTotal = 0;
    const [total, setTotal] = useState(0)

    const found = cartContext.showData.filter((elem) => {
        return elem.userId === loginContext.userIdLoggedIn
    })

    const find = found.filter((elem, i) => {
        return elem.userId === loginContext.userIdLoggedIn
    })

    const findA = find.map((elem) => {
        return elem.product[0]
    })

    const buyCart = () => {

    }
    return (
        <>
            <div>
                {findA.map((elem) => {
                    return <ProductItem elem={elem} subTotal={subTotal} find={find} />

                })}
                {/* {setTotal(subTotal)} */}
                <p>Total :{subTotal}</p>
                <button onClick={buyCart}>Buy</button>


            </div>
        </>
    )
}
const ProductItem = ({ elem, subTotal, find }) => {
    const [qunat, setQunat] = useState(1)
    const itemCartContext = useContext(ItemCartContext);
    const cartContext = useContext(CartContext);
    const [id, setId] = useState('')

    const increase = () => {
        setQunat(qunat + 1)
    }
    const decrease = () => {
        if (itemCartContext.quantity >= 0) {
            setQunat(qunat - 1)
        }
    }
    const deleteItem = (id) => {
        const found = find.filter((elem) => {
            return elem.product[0]._id == id
        })
        console.log("qq", found[0]._id);
        axios
            .delete("http://localhost:5000/show/cart/deleted", {
                _id: found[0]._id
            })
            .then((result) => { console.log(result); })
            .catch((err) => { throw err })
    }

    return (
        <>
            <div key={elem._id} >
                <p>{elem.title} </p>
                <p>Located in : {elem.location}</p>
                <button onClick={increase}>+</button>
                <p>qunat: {qunat}</p>
                <button onClick={decrease}>-</button>
                <p>In Stock : {elem.quantity}</p>
                <button onClick={(e) => { deleteItem(elem._id) }}>Delete</button>
                <p>Price : {elem.price}</p>
                {/* {tot.subTotal += elem.price * elem.quantity} */}
            </div>
        </>
    );
}


export default Cart;
