import React, { useEffect, useState } from "react";
import axios from "axios";

export const CreateProductContext = React.createContext();

const CreateProductProvider = (props) => {
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState("");
  const [optionsToExchange, setOptionsToExchange] = useState("");
  const [itemLength, setItemLength] = useState("");
  const [itemHeight, setItemHeight] = useState("");
  const [itemWidth, setItemWidth] = useState("");
  const [itemWeight, setItemWeight] = useState("");
  const [location, setLocation] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [messageTrue, setMessageTrue] = useState("");
  const [messageFalse, setMessageFalse] = useState("");

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
messageFalse

  };

  axios.post("http://localhost:5000/create/product", {
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
  }).then((result)=>{
    setMessageTrue("your product created")
  }).catch((err)=>{
    setMessageFalse("can't create try again please")
  });

  return (
    <CreateProductContext.Provider value={state}>
      {props.children}
    </CreateProductContext.Provider>
  );
};

export default CreateProductProvider;
