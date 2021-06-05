import React, { useState } from 'react';
import axios from 'axios';

export const ItemCardContext = React.createContext();

const ItemCardProvider = (props) => {
    const [products, setProducts] = useState([]);
    const state = {
        products,
        showProduct,
    };
    async function showProduct() {
        try {
            const res =await axios.get('http://localhost:5000/main')
            setProducts(res.data);
        } catch (error) {
           throw error;
        }
    }

    return (
        <ItemCardContext.Provider value={state}>
            {props.children}
        </ItemCardContext.Provider>
    );
}

export default ItemCardProvider;