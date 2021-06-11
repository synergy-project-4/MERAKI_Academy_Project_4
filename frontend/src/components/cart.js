import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "./../contexts/cart";
import { CreateProductContext } from "./../contexts/createProduct";
import { LoginContext } from "./../contexts/login";
import { ItemCartContext } from "./../contexts/productDetails";
import axios from "axios";

const Cart = (props) => {
  const cartContext = useContext(CartContext);
  const loginContext = useContext(LoginContext);
  const itemCartContext = useContext(ItemCartContext);
  const [total, setTotal] = useState(0);

  const found = cartContext.showData.filter((elem) => {
    return elem.userId === loginContext.userIdLoggedIn;
  });

  const find = found.filter((elem, i) => {
    return elem.userId === loginContext.userIdLoggedIn;
  });

  const findA = find.map((elem) => {
    return elem.product[0];
  });

  const buyCart = () => {};

  return (
    <>
      <div>
        {findA.map((elem) => {
          return (
            <ProductItem
              findA={findA}
              elem={elem}
              find={find}
              total={total}
              setTotal={setTotal}
              buyCart={buyCart}
            />
          );
        })}
        <p>Total :{total}</p>
        <button onClick={buyCart}>Buy</button>
      </div>
    </>
  );
};
const ProductItem = ({ elem, find, total, setTotal, findA }) => {
  const [qunat, setQunat] = useState(0);
  const itemCartContext = useContext(ItemCartContext);
  const cartContext = useContext(CartContext);
  const [subTotal, setSubTotal] = useState(elem.price * qunat);
  const [id, setId] = useState("");

  useEffect(() => {
    let priceElem = findA.reduce(function (acc, elem, i) {
      return acc + elem.price;
    }, 0);
    setTotal(priceElem);
  }, []);

  useEffect(() => {
    setTotal(total + subTotal);
  }, [qunat]);

  const increase = (price) => {
    setQunat(qunat + 1);
    setSubTotal(price);
  };
  const decrease = () => {
    if (itemCartContext.quantity >= 0) {
      setQunat(qunat - 1);
    }
    setSubTotal((subTotal += elem.price * qunat));
  };
  const deleteItem = (id) => {
    const found = find.filter((elem) => {
      return elem.product[0]._id == id;
    });
    axios
      .delete("http://localhost:5000/show/cart/deleted", {
        data: { id: found[0]._id },
      })
      .then((result) => {
        console.log(result.data);
      })
      .catch((err) => {
        throw err;
      });
  };

  return (
    <>
      <div key={elem._id}>
        <p>{elem.title} </p>
        <button
          onClick={() => {
            increase(elem.price);
          }}
        >
          +
        </button>
        <p>qunat: {qunat}</p>
        <button onClick={decrease}>-</button>
        <p>In Stock : {elem.quantity}</p>
        <button
          onClick={(e) => {
            deleteItem(elem._id);
          }}
        >
          Delete
        </button>
        <p>Price : {subTotal}</p>
        <p>price per item {elem.price}</p>
      </div>
    </>
  );
};

export default Cart;
