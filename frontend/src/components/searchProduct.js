import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { ItemCardContext } from "./../contexts/main";
import { HeaderContext } from "../contexts/header";
import Pagination from "../components/pagination/pagination"
import "./main.css";

const SearchProduct = (props) => {
  const headerContext = useContext(HeaderContext);
  const itemCardContext = useContext(ItemCardContext);
  const history = useHistory();

  if (headerContext.filterPrice == "ascending") {
    const f = props.item.sort(function (a, b) {
      return a.price - b.price;
    });
  }
  if (headerContext.filterPrice == "descending") {
    props.item.sort(function (a, b) {
      return b.price - a.price;
    });
  }

  const cardDetails = async (id) => {
    const foundItem = props.item.find((elem) => {
      return elem._id == id;
    });
    itemCardContext.setFound(foundItem);
    history.push("/product/details");
  };
  return (
    <>
      {props.item.length !==0 ? (
        <div className="mainBody">
          {console.log(props)}
          {props.item.map((elem) => {
            if (elem.quantity !== 0) {
              return (
                <div
                  onClick={() => {
                    cardDetails(elem._id);
                  }}
                  className="itemCard"
                  key={elem._id}
                >
                  <div>
                    <img className="product-img" src={elem.image}></img>
                  </div>
                  <div>
                    <p className="title">{elem.title}</p>
                    <p className="info">{elem.shortDescription}</p>
                    <p className="info">Located in: {elem.location}</p>
                    <p className="price">In Stock : {elem.quantity}</p>
                    <p className="price">price : {elem.price}$</p>
                  </div>
                </div>
              );
            }
          })}
        </div>) : (<h2>there no items to display at the moment</h2>
      )}
      <Pagination />
      <div></div>
    </>
  );
};

export default SearchProduct;
