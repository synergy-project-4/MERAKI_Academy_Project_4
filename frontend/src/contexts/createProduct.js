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
  const [image, setImage] = useState("");
  const [userId, setUserId] = useState("");

  const state = {
    setImage,
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
          image,
          userId: loginContext.userIdLoggedIn,
        },
        {
          headers: {
            Authorization: `Bearer ${loginContext.token}`,
          },
        }
      )
      .then((result) => {
        setMessageTrue(
          "Your Product Creation Has Been sent Successfully, Waiting For Admin's Approval "
        );
        setMessageFalse("");
      })
      .catch((err) => {
        setMessageFalse(
          "An Error Has occurred, Make Sure To Fill-in The Blanks "
        );
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
