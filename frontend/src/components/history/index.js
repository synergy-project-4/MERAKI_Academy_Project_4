import React, { useContext, useEffect, useState } from "react";
import { HistoryContext } from "../../contexts/history";
import axios from "axios";
import { useHistory } from "react-router-dom";

const History = () => {
  const historyContext = useContext(HistoryContext);
  const history = useHistory();

  return (
    <>
      <div>
       
      </div>
    </>
  );
};

export default History;
