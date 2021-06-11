import React, { useContext, useEffect, useState } from "react";
import { LoginContext } from "./login";
import axios from "axios";

export const CreateProductContext = React.createContext();

const CreateProductProvider = (props) => {
  const loginContext = useContext(LoginContext);
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [optionsToExchange, setOptionsToExchange] = useState("");
  const [itemLength, setItemLength] = useState("");
  const [itemHeight, setItemHeight] = useState("");
  const [itemWidth, setItemWidth] = useState("");
  const [itemWeight, setItemWeight] = useState("");
  const [location, setLocation] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [messageTrue, setMessageTrue] = useState("");
  const [messageFalse, setMessageFalse] = useState("");
  const [userId, setUserId] = useState("");


  const state = {
    setTitle,
    setTags,
    setDescription,
    setPrice,
    setQuantity,
    setOptionsToExchange,
    setItemLength,
    setItemHeight,
    setItemWidth,
    setItemWeight,
    setLocation,
    setShortDescription,
    messageTrue,
    messageFalse,
    createProducts,
  };

  async function createProducts() {
    console.log(  title,
      tags,
      description,
      price,
      quantity,
      optionsToExchange,
      itemLength,
      itemHeight,
      itemWidth,
      itemWeight,
      location,
      shortDescription,
      userId);
    await axios
      .post(
        "http://localhost:5000/create/product",
        {
          title,
          tags,
          description,
          price,
          quantity,
          optionsToExchange,
          itemLength,
          itemHeight,
          itemWidth,
          itemWeight,
          location,
          shortDescription,
          userId :loginContext.userIdLoggedIn,
        },
        {
          headers: {
            Authorization: `Bearer ${loginContext.token}`,
          },
        }
      )
      .then((result) => {
        setMessageTrue("your product created");
        setMessageFalse("");
      })
      .catch((err) => {
        setMessageFalse("can't create try again please");
        setMessageTrue("");
      });
  }

  return (
    <CreateProductContext.Provider value={state}>
      {props.children}
    </CreateProductContext.Provider>
  );
};

export default CreateProductProvider;
