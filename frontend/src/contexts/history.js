import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { LoginContext } from "./login";

export const HistoryContext = React.createContext();

const HistoryProvider = (props) => {
  const loginContext = useContext(LoginContext);
  let id;
  const [found, setFound] = useState([]);

  const state = {
    found,
    showHistory,
  };

  async function showHistory() {
    id = localStorage.getItem("id");
    try {
      await axios.get("http://localhost:5000/main").then((result) => {
        setFound(
          result.data.filter((elem) => {
            return elem.userId === id && elem.sold === true;
          })
        );
      });
    } catch (error) {
      throw error;
    }
  }

  // showHistory()

  return (
    <HistoryContext.Provider value={state}>
      {props.children}
    </HistoryContext.Provider>
  );
};

export default HistoryProvider;
