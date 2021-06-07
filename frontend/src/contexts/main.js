import React, { useEffect, useState } from 'react';
import axios from 'axios';



export const ItemCardContext = React.createContext();

const ItemCardProvider = (props) => {
    const [products, setProducts] = useState([]);
    const [found, setFound] = useState('');
    const [offset, setOffset] = useState(0);
    const [data, setData] = useState([]);
    const [perPage] = useState(4);
    const [pageCount, setPageCount] = useState(0)
    const [slice, setSlice] = useState([])


    const state = {
        products,
        showProduct,
        setFound,
        found,
        slice,
        offset, setOffset, perPage
    };


    async function showProduct() {
        try {
            await axios.get('http://localhost:5000/main')
                .then((result) => {
                    console.log(offset, offset + perPage);
                    const setOfdata = result.data.slice(offset, offset + perPage)
                    setProducts(setOfdata);
                })

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