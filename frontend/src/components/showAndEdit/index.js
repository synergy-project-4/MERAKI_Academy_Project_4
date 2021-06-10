import React, { useContext, useEffect, useState } from "react";
import { ShowAndEditContext } from "../../contexts/showAndEdit";
import axios from "axios";
import { useHistory } from "react-router-dom";

const ShowAndEdit = () => {
  const showAndEditContext = useContext(ShowAndEditContext);
  const history = useHistory();

  useEffect(() => {
    showAndEditContext.show();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(showAndEditContext.found);
  };
  return (
    <>
      <form>
        <div>
          <h1 onClick={handleSubmit}>Show And Edit</h1>
        </div>
        {showAndEditContext.found.map((elem) => {
          return (
            <div className="manage-product">
              <p className="title">{elem.title}</p>
              <p className="info">Description :{elem.shortDescription}</p>
              <p className="info">Located in :{elem.location}</p>
              <p className="price">In Stock : {elem.quantity}</p>
              <p className="price">Price :{elem.price}</p>
              <button className="acttion-button">edit</button>
              <button className="acttion-button">delete</button>
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
