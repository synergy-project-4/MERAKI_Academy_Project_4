import React, { useContext, useEffect, useState } from 'react';
import { ItemCardContext } from './../../contexts/main';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import { useHistory } from "react-router-dom";
import './main.css'


const Main = () => {
  const itemCardContext = useContext(ItemCardContext);
  const history = useHistory();
  const [postData, setPostData] = useState([]);
  useEffect(() => {
    itemCardContext.showProduct();
  }, [itemCardContext.offset]);

  const cardDetails = async (id) => {
    const foundItem = itemCardContext.products.find((elem) => {
      return elem._id == id;
    });
    itemCardContext.setFound(foundItem);
    history.push("/product/details");
  };

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    itemCardContext.setOffset(selectedPage * itemCardContext.perPage);
  };

  return (
    <>
      <div className="mainBody">
        {itemCardContext.products.map((elem) => {
          return (
            <div
              onClick={() => {
                cardDetails(elem._id);
              }}
              className="itemCard"
              key={elem._id}
            >
              <p className="title">{elem.title} </p>
              <p className="info">Description : {elem.shortDescription}</p>
              <p className="info">Located in : {elem.location}</p>
              <p className="price">In Stock : {elem.quantity}</p>
              <p className="price">Price : {elem.price}$</p>
            </div>
          );
        })}
      </div>
      <div className="paginate-page">
        <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={itemCardContext.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </div>
    </>
  );
};

export default Main;
