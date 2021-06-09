import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from './../contexts/cart';
import { CreateProductContext } from './../contexts/createProduct'
import axios from 'axios'


const Cart = ({ cartData, setCartData }) => {
    const createProductContext = useContext(CreateProductContext);
    const cartContext = useContext(CartContext);
    const [done, setDone] = useState(false)
    const [zeroQuantity, setZeroQuantity] = useState(false)
    const [quan, setQuan] = useState(1)
    const [total, setTotal] = useState(0)
    let found = ''
    const arr = []
    let a;
    const incFunction = (elem) => {
        setQuan(quan + 1)
        //itemCartContext.setQuantity(itemCartContext.quantity-1)

    }

    const decFunction = () => {
        setQuan(quan - 1)
        //itemCartContext.setQuantity(itemCartContext.quantity+1)
    }

    const buyingDone = (elem) => {
        console.log("elem",createProductContext);
        if (quan <= elem.quantity) {
            createProductContext.setQuantity(createProductContext.quantity - quan)
        } else if (elem.quantity === 0) {
            setZeroQuantity(true)
        } else {
            setDone(true)
        }
    }
    useEffect(() => {
        axios
            .get("http://localhost:5000/main")
            .then((result) => {
                found = result.data.find((elem) => {
                    return elem._id === cartContext.productId
                })
                console.log("cartdta", [...cartData, found]);
                console.log("found", found);
                if (!cartData.includes(found)) {
                    setCartData([...cartData, found])
                }
            })
            .catch((err) => {
                throw err
            })
    }, []);

    // console.log(cartData);
    const fun = (elem) => {
        let a = elem.price * quan
        a += total
        //console.log("a", a);
        //setTotal(a)

    }
    return (

        <>
            {cartData.map((elem) => {
                fun(elem)
                // console.log(elem.price);
                //console.log(quan);


                return <div className="cartStyle" key={elem._id}>
                    <p> {elem.title}</p>
                    <button onClick={incFunction}>+1</button>
                    <p> {quan}</p>
                    <button onClick={decFunction}>-1</button>
                    <p>{a}</p>
                    <p>In stock: {elem.quantity}</p>
                    <button onClick={buyingDone}>Buy</button>
                </div>
            })

            }
            {/* <p>Total price :{total} </p> */}
            <div>
                {done ? <p className="failMessage">reduce the quantity to :{createProductContext.quantity} </p> : ""}
                {zeroQuantity ? <p className="failMessage">Sorry , the item:{ }, not available </p> : ""}
            </div>
        </>
    )
}
export default Cart;
