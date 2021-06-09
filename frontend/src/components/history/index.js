import React, { useContext, useEffect, useState } from "react";
import { HistoryContext } from "../../contexts/history";
import axios from "axios";
import { useHistory } from "react-router-dom";

const History = () => {
  const historyContext = useContext(HistoryContext);
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
    <form >
      {/* {historyContext.found.map(())} */}
      <div>
       <h3 onClick={handleSubmit}>History</h3>
      </div>
      </form>
    </>
  );
};

export default History;
