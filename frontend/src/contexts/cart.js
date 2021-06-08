import React, {useState } from 'react';

export const CartContext = React.createContext();

const CartProvider = (props) => {
    const [productId, setProductId] = useState([])
    

    const state = {
        productId,
        setProductId,
    };

    return (
        <CartContext.Provider value={state}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartProvider;