import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from './../contexts/cart';
import { ItemCartContext } from './../contexts/productDetails'
import axios from 'axios'


const Cart = () => {
    const itemCartContext = useContext(ItemCartContext);
    const [cartData, setCartData] = useState([])
    const cartContext = useContext(CartContext);
    const [done, setDone] = useState(false)
    const [zeroQuantity, setZeroQuantity] = useState(false)
    const [quan, setQuan] = useState(1)
    const total = 0;
    let found = ''
    const arr = []

    const incFunction = () => {
        setQuan(quan + 1)
        //itemCartContext.setQuantity(itemCartContext.quantity-1)

    }

    const decFunction = () => {
        setQuan(quan - 1)
        //itemCartContext.setQuantity(itemCartContext.quantity+1)
    }

    const buyingDone = () => {
        if(quan<=itemCartContext.quantity){
            itemCartContext.setQuantity(itemCartContext.quantity-quan)
        }else if(itemCartContext.quantity===0){
            setZeroQuantity(true)
        }else if(quan>itemCartContext.quantity){
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
                setCartData([...cartData, found])
            })
            .catch((err) => {
                throw err
            })
    }, []);

    // console.log(cartData);
    return (

        <>
            {cartData.map((elem) => {
                return <div className="cartStyle" key={elem._id}>
                    <p> {elem.props.item.title}</p>
                    <button onClick={incFunction}>+1</button>
                    <p> {quan}</p>
                    <button onClick={decFunction}>-1</button>
                    <p> {elem.props.item.price * quan}</p>
                    {total += elem.props.item.price * quan}
                    <p>The quantity of product : {itemCartContext.quantity}</p>
                    <button onClick={buyingDone}>Buy</button>
                </div>
            })

            }
            <p>Total price :{total} </p>
            <div>
                    {done ? <p className="failMessage">reduce the quantity to :{itemCartContext.quantity} </p> : ""}
                    {zeroQuantity ? <p className="failMessage">Sorry , the item:{}, not available </p> : ""}
                </div>
        </>
    )
}
export default Cart;
