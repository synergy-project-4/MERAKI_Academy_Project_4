import React, { useContext,useEffect, useState } from "react";
import { LoginContext } from "./login";
import axios from "axios";

export const PendingApprovalContext = React.createContext();

const PendingApprovalProvider = (props) => {
  const loginContext = useContext(LoginContext);
  let id;
  const [found, setFound] = useState([]);

  const state = {
    found,
    showApproval,
  };

  async function showApproval() {
    id = localStorage.getItem("id");
    try {
      await axios.get("http://localhost:5000/main").then((result) => {
        setFound(
          result.data.filter((elem) => {
            return elem
          })
        );
      });
    } catch (error) {
      throw error;
    }
  }
    return (
        <PendingApprovalContext.Provider value={state}>
          {props.children}
        </PendingApprovalContext.Provider>
      );
    };
    
    export default PendingApprovalProvider;