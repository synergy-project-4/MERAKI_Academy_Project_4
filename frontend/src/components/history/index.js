import React, { useContext, useEffect, useState } from "react";
import { HistoryContext } from "../../contexts/history";
import { LoginContext } from "../../contexts/login";
import axios from "axios";
import { useHistory } from "react-router-dom";

const History = () => {
  const historyContext = useContext(HistoryContext);
  const loginContext = useContext(LoginContext);
  const history = useHistory();

  useEffect(() => {
    historyContext.showHistory();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(historyContext.found);
  };

  return (
    <>
      <form>
        <div>
          <h3 onClick={handleSubmit}>History</h3>
        </div>
        {historyContext.found.map((elem) => {
          return (
            <div>
              <p>{elem.title}</p>
              <p>Description :{elem.shortDescription}</p>
              <p>Located in :{elem.location}</p>
              <p>In Stock : {elem.quantity}</p>
              <p>Price :{elem.price}</p>
              <br></br>
            </div>
          );
        })}
      </form>
    </>
  );
};

export default History;
