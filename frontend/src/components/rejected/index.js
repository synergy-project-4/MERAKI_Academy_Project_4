import React, { useState, useContext, useEffect } from "react";
import { RejectedContext } from "../../contexts/rejected";
import "../createProduct/createProduct.css";


const Rejected = () => {
  const rejectedContext = useContext(RejectedContext);

  useEffect(() => {
    rejectedContext.showRejected();
  }, []);

  return (
    <>
      <h1 style={{ marginLeft: "32px" }}>Rejected</h1>
      <div className="mainBody">
        {rejectedContext.found.map((elem) => {
          return (
            <>
              <div className="itemCard">
                <div>
                  <img className="product-img" src={elem.image} />
                </div>

                <div>
                  <p className="title">{elem.title}</p>
                  <p className="info">Description : {elem.shortDescription}</p>
                  <p className="info">Located in : {elem.location}</p>
                  {/* <p className="price" >In Stock : {elem.quantity}</p> */}
                  <p className="price">Price : {elem.price}</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Rejected;
