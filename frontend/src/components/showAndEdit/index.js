import React, { useContext, useEffect, useState } from "react";
import { ShowAndEditContext } from "../../contexts/showAndEdit";
import axios from "axios";
import { useHistory } from "react-router-dom";

const ShowAndEdit = () => {
  const showAndEditContext = useContext(ShowAndEditContext);
  const history = useHistory();

  useEffect(() => {
    showAndEditContext.show();
  },[]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(showAndEditContext.found);
  };
  return (
    <>
      <form>
        <div>
          <h3 onClick={handleSubmit}>Show And Edit</h3>
        </div>
        {showAndEditContext.found.map((elem) => {
          return (
            <div key={elem._id}>
              <p>{elem.title}</p>
              <p>Description :{elem.shortDescription}</p>
              <p>Located in :{elem.location}</p>
              <p>In Stock : {elem.quantity}</p>
              <p>Price :{elem.price}</p>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  showAndEditContext.setProductId(elem._id);
                  showAndEditContext.setItem(elem)
                  history.push("/manage/product/edit")
                }}
              >
                edit
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  showAndEditContext.deleteProduct(elem._id)
                }}
              >
                delete
              </button>
              <br></br>
              <br></br>
            </div>
          );
        })}
      </form>
    </>
  );
};

export default ShowAndEdit;
