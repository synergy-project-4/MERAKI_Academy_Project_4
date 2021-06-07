import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';


export const ItemCardContext = React.createContext();

const ItemCardProvider = (props) => {
    const [products, setProducts] = useState([]);
    const [found, setFound] = useState('');
    const [offset, setOffset] = useState(0);
    const [data, setData] = useState([]);
    const [perPage] = useState(3);
    const [pageCount, setPageCount] = useState(0)
    const [slice, setSlice] = useState([])


    const state = {
        products,
        showProduct,
        setFound,
        found,
        slice,
        offset,
        setOffset,
        perPage,
        pageCount
    };


    async function showProduct() {
        try {
            await axios.get('http://localhost:5000/main')
                .then((result) => {
                    const setOfdata = result.data.slice(offset, offset + perPage)
                    console.log("b",offset);
                   // setOffset(offset+perPage)
                    console.log("a",offset);

                   // console.log(setOfdata);
                    setProducts(setOfdata);
                    setPageCount(Math.ceil(result.data.length / perPage))
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