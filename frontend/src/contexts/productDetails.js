import React, { useState } from 'react';

export const ItemCartContext = React.createContext();

const ItemCartProvider = (props) => {
    const [quantity, setQuantity] = useState(0);

    const state = {
        quantity,
        setQuantity,
    }

    return (
        <ItemCartContext.Provider value={state}>
            {props.children}
        </ItemCartContext.Provider>
    );
}

export default ItemCartProvider;