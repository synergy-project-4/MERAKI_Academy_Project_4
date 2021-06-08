import React, { useContext, useEffect, useState } from "react";
import { CreateProductContext } from "../../contexts/createProduct";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./createProduct.css";

const CreateProduct = () => {
  const createProductContext = useContext(CreateProductContext);
  const history = useHistory();

  return (
    <>
      <div>
        <input
          placeholder="title"
          type="text"
          onChange={(e) => {
            createProductContext.setTitle(e.target.value);
          }}
        />
        <input
          placeholder="tags"
          type="text"
          onChange={(e) => {
            createProductContext.setTags(e.target.value);
          }}
        />
        <input
          placeholder="description"
          type="text"
          onChange={(e) => {
            createProductContext.setDescription(e.target.value);
          }}
        />
        <input
          placeholder="price"
          type="text"
          onChange={(e) => {
            createProductContext.setPrice(e.target.value);
          }}
        />
        <input
          placeholder="quantity"
          type="number"
          onChange={(e) => {
            createProductContext.setQuantity(e.target.value);
          }}
        />
        <input
          placeholder="optionsToExchange"
          type="boolean"
          onChange={(e) => {
            createProductContext.setOptionsToExchange(e.target.value);
          }}
        />
        <input
          placeholder="itemLength"
          type="number"
          onChange={(e) => {
            createProductContext.setItemLength(e.target.value);
          }}
        />
        <input
          placeholder="itemHeight"
          type="number"
          onChange={(e) => {
            createProductContext.setItemHeight(e.target.value);
          }}
        />
        <input
          placeholder="itemWidth"
          type="number"
          onChange={(e) => {
            createProductContext.setItemWidth(e.target.value);
          }}
        />
        <input
          placeholder="itemWeight"
          type="number"
          onChange={(e) => {
            createProductContext.setItemWeight(e.target.value);
          }}
        />
        <input
          placeholder="location"
          type="text"
          onChange={(e) => {
            createProductContext.setLocation(e.target.value);
          }}
        />
        <input
          placeholder="shortDescription"
          type="text"
          onChange={(e) => {
            createProductContext.setShortDescription(e.target.value);
          }}
        />
        <button onClick={createProductContext.createProducts}>submit</button>

        {createProductContext.messageTrue && (
          <div>{createProductContext.messageTrue}</div>
        )}
        {createProductContext.messageFalse && (
          <div>{createProductContext.messageFalse}</div>
        )}
      </div>
    </>
  );
};

export default CreateProduct;
