import React, { useContext, useEffect, useState } from "react";
import { PendingApprovalContext } from "../../contexts/pendingApproval";
import axios from "axios";
import { useHistory } from "react-router-dom";

const PendingApproval = () => {
  const pendingApprovalContext = useContext(PendingApprovalContext);
  const history = useHistory();

  useEffect(() => {
    pendingApprovalContext.showApproval();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(pendingApprovalContext.found);
  };
  return (
    <>
    <form>
      <div>
       <h3 onClick={handleSubmit}>Pending Approval</h3>
      </div>
      {pendingApprovalContext.found.map((elem) => {
          return (
            <div>
              <p>{elem.title}</p>
              <p>Description :{elem.shortDescription}</p>
              <p>Located in :{elem.location}</p>
              <p>In Stock : {elem.quantity}</p>
              <p>Price :{elem.price}</p>
              <button>approve</button>
              <button>remove</button>
              <br></br>
              <br></br>
            </div>
          );
        })}
        </form>
    </>
  );
};

export default PendingApproval;