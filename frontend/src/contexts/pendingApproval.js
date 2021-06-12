import React, { useContext, useEffect, useState } from "react";
import { LoginContext } from "./login";
import axios from "axios";

export const PendingApprovalContext = React.createContext();

const PendingApprovalProvider = (props) => {
  const loginContext = useContext(LoginContext);
  let id;
  let token;
  const [found, setFound] = useState([]);
  const [admin, setAdmin] = useState(false);

  const state = {
    found,
    showApproval,
    admin
  };
  async function getUser() {
    id = localStorage.getItem("id");
    token = localStorage.getItem("token");
    console.log("hereeeeeeee", id);
    try {
      await axios
        .get(`http://localhost:5000/profile?id=${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((result) => {
          setAdmin(result.data.admin);
          console.log(result.data.admin);
        });
    } catch (error) {}
  }

  async function showApproval() {
    getUser();
    id = localStorage.getItem("id");
    token = localStorage.getItem("token");
    try {
      await axios
        .get(`http://localhost:5000/products/approval?id=${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((result) => {
          setFound(result.data);
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
