import React from 'react';

const ProductDetails = (props) => {
    return (
        <>
            <div key={props.item._id}>
                <p>{props.item.title}</p>
                <p>{props.item.shortDescription}</p>
                <p>{props.item.tags}</p>
                <p>{props.item.price}</p>
                <p>{props.item.description}</p>
                <p>{props.item.quantity}</p>
                <p>{props.item.location}</p>
            </div>
            <div>
                <button>Add to cart</button>
                {props.item.optionsToExchange && <button>Exchange</button>}

            </div>
        </>
    )
}

export default ProductDetails;
