import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";

export const RejectedContext = React.createContext();

const RejectedProvider = (props) => {
  let id;
  const [found, setFound] = useState([]);

  const state = {
    found,
    showRejected,
  };

  async function showRejected() {
    id = localStorage.getItem("id");
    try {
      await axios
        .get("http://localhost:5000/product/rejected")
        .then((result) => {
          setFound(
            result.data.filter((elem) => {
              return elem.rejected === true;
            })
          );
        });
    } catch (error) {
      throw error;
    }
  }

  return (
    <RejectedContext.Provider value={state}>
      {props.children}
    </RejectedContext.Provider>
  );
};

export default RejectedProvider;
