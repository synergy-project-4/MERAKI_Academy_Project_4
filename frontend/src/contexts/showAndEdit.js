import React, { useContext, useEffect, useState } from "react";
import { LoginContext } from "./login";
import axios from "axios";

export const ShowAndEditContext = React.createContext();

const ShowAndEditProvider = (props) => {
  const loginContext = useContext(LoginContext);
  let id;
  const [found, setFound] = useState([]);
  const [productId, setProductId] = useState("");

  const state = {
    found,
    show,
    editProduct,
    deleteProduct,
  };

  async function show() {
    id = localStorage.getItem("id");
    try {
      await axios.get("http://localhost:5000/main").then((result) => {
        setFound(
          result.data.filter((elem) => {
            return elem.userId === id && elem.sold === false;
          })
        );
      });
    } catch (error) {
      throw error;
    }
  }

  async function editProduct(productId) {
    try {
      await axios
        .put(`http://localhost:5000/manage/product?id=${productId}`, {
          headers: {
            Authorization: `Bearer ${loginContext.token}`,
          },
        })
        .then((result) => {
          setFound(result);
        });
    } catch (error) {
      throw error;
    }
  }

  async function deleteProduct(productId) {
    try {
      await axios
        .delete(`http://localhost:5000/manage/product?id=${productId}`, {
          headers: {
            Authorization: `Bearer ${loginContext.token}`,
          },
        })
        .then((result) => {
          setFound(result);
        });
    } catch (error) {
      throw error;
    }
  }

  return (
    <ShowAndEditContext.Provider value={state}>
      {props.children}
    </ShowAndEditContext.Provider>
  );
};

export default ShowAndEditProvider;
