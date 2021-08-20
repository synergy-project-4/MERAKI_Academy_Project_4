import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ItemCardContext } from "./../contexts/main";
import { HeaderContext } from "../contexts/header";
import Pagination from "../components/pagination/pagination"
import { HistoryContext } from "../contexts/history"
import "./main.css";

const SearchProduct = (props) => {
  const headerContext = useContext(HeaderContext);
  const itemCardContext = useContext(ItemCardContext);
  const historyContext = useContext(HistoryContext);
  const history = useHistory();

  useEffect(() => {
    headerContext.searchItem();
  }, [headerContext.offset]);


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
      <div className="mainBody">
        {console.log("history", historyContext.searchResult)}
        {historyContext.searchResult.map((elem) => {
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
                  <p className="price">{elem.price}</p>
                </div>
              </div>
            );
          }
        })}
      </div>
      <Pagination />
      <div></div>
    </>
  );
};

export default SearchProduct;
