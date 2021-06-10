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
    // console.log("itemCartContext.quantity", itemCartContext.quantity);
    const [subTotal, setSubTotal] = useState(0)
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
                    return <ProductItem elem={elem} subTotal={subTotal} setSubTotal={setSubTotal} find={find} />
                })}
                {/* {setTotal(total+subTotal)} */}
                <p>Total :{total}</p>
                <button onClick={buyCart}>Buy</button>


            </div>

        </>
    )
}
const ProductItem = ({ elem, subTotal, find, setSubTotal }) => {
    const [qunat, setQunat] = useState(1)
    const itemCartContext = useContext(ItemCartContext);
    const cartContext = useContext(CartContext);
    const [id, setId] = useState('')
    setSubTotal(elem.price * qunat)

    const increase = () => {
        setQunat(qunat + 1)
        setSubTotal(elem.price * qunat)
        console.log("sub", subTotal);

    }
    const decrease = () => {
        if (itemCartContext.quantity >= 0) {
            setQunat(qunat - 1)
        }//3 
        setSubTotal(subTotal += elem.price * qunat)
        console.log("sub", subTotal);
    }
    const deleteItem = (id) => {
        const found = find.filter((elem) => {
            return elem.product[0]._id == id
        })
        axios
            .delete("http://localhost:5000/show/cart/deleted", {
                data: { id: found[0]._id }
            })
            .then((result) => { console.log(result.data); })
            .catch((err) => { throw err })
    }

    return (
        <>
            <div key={elem._id} >
                <p>{elem.title} </p>
                <button onClick={increase}>+</button>
                <p>qunat: {qunat}</p>
                <p>price :{elem.price}</p>
                <button onClick={decrease}>-</button>
                <p>In Stock : {elem.quantity}</p>
                <button onClick={(e) => { deleteItem(elem._id) }}>Delete</button>
                <p>total : {elem.price * qunat}</p>
            </div>
        </>
    );
}


export default Cart;
