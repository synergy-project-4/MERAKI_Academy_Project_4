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
  const [messageTrue, setMessageTrue] = useState("");
  const [messageFalse, setMessageFalse] = useState("");
  const [approvalStatus, setApprovalStatus] = useState(false)

  const state = {
    found,
    approvalStatus,
    showApproval,
    admin,
    messageTrue,
    messageFalse,
    approveProduct,
    rejectedProduct
  };

  async function approveProduct(product) {
    token = localStorage.getItem("token");
    let ready = true
    try {
      await axios
        .put(
          `http://localhost:5000/approve?id=${product}`,
          {
           ready
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((result) => {
          setMessageTrue("Product Has Been approved");
          setMessageFalse("");
          setApprovalStatus(!approvalStatus)
        });
    } catch (error) {
      setMessageTrue("");
      setMessageFalse("An Error Has Occurred, Please Try Again");
      throw error;
    }
  }

  async function rejectedProduct(product) {
    token = localStorage.getItem("token");
    let rejected = true
    try {
      await axios
        .put(
          `http://localhost:5000/rejected?id=${product}`,
          {
           rejected
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((result) => {
          setMessageTrue("Product Has Been rejected");
          setMessageFalse("");
          setApprovalStatus(!approvalStatus)
        });
    } catch (error) {
      setMessageTrue("");
      setMessageFalse("An Error Has Occurred, Please Try Again");
      throw error;
    }
  }
  async function getUser() {
    id = localStorage.getItem("id");
    token = localStorage.getItem("token");
    try {
      await axios
        .get(`http://localhost:5000/profile?id=${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((result) => {
          setAdmin(result.data.admin);
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
