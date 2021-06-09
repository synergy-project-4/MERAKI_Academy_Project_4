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
      <div className="create-product-body">
        <div className="create-product">
          <p
            style={{ color: "yellow", fontSize: "30px", marginBottom: "20px" }}
          >
            Product Creation
          </p>
          <input
            className="input"
            placeholder="Title (name of the prodcut)"
            type="text"
            onChange={(e) => {
              createProductContext.setTitle(e.target.value);
            }}
          />
          <input
            className="input"
            placeholder="Tags (item category)"
            type="text"
            onChange={(e) => {
              createProductContext.setTags(e.target.value);
            }}
          />
          <input
            className="input"
            placeholder="Description (describe the item)"
            type="text"
            onChange={(e) => {
              createProductContext.setDescription(e.target.value);
            }}
          />
          <input
            className="input"
            placeholder="Price (item cost)"
            type="text"
            onChange={(e) => {
              createProductContext.setPrice(e.target.value);
            }}
          />
          <input
            className="input"
            placeholder="Quantity (number of items for sale )"
            type="number"
            onChange={(e) => {
              createProductContext.setQuantity(e.target.value);
            }}
          />
          <input
            className="input"
            placeholder="Open For Exchange (true or false)"
            type="boolean"
            onChange={(e) => {
              createProductContext.setOptionsToExchange(e.target.value);
            }}
          />
          <input
            className="input"
            placeholder="Item Length (for example : 1m , 20cm , 30mm)"
            type="text"
            onChange={(e) => {
              createProductContext.setItemLength(e.target.value);
            }}
          />
          <input
            className="input"
            placeholder="Item Height (for example : 1m , 20cm , 30mm)"
            type="text"
            onChange={(e) => {
              createProductContext.setItemHeight(e.target.value);
            }}
          />
          <input
            className="input"
            placeholder="Item Width (for example : 1m , 20cm , 30mm)  "
            type="text"
            onChange={(e) => {
              createProductContext.setItemWidth(e.target.value);
            }}
          />
          <input
            className="input"
            placeholder="Item Weight (for example : 3kg , 200mg )"
            type="text"
            onChange={(e) => {
              createProductContext.setItemWeight(e.target.value);
            }}
          />
          <input
            className="input"
            placeholder="Location (Pick One: Amman, Irbid, Madaba, Zarqa, Aqaba)"
            type="text"
            onChange={(e) => {
              createProductContext.setLocation(e.target.value);
            }}
          />
          <input
            className="input"
            placeholder="Short Description (Add a Short Description For The Item)"
            type="text"
            onChange={(e) => {
              createProductContext.setShortDescription(e.target.value);
            }}
          />
          <button
            className="create-button"
            onClick={createProductContext.createProducts}
          >
            Submit Product Creation
          </button>

          {createProductContext.messageTrue && (
            <div>{createProductContext.messageTrue}</div>
          )}
          {createProductContext.messageFalse && (
            <div>{createProductContext.messageFalse}</div>
          )}
        </div>
      </div>
    </>
  );
};

export default CreateProduct;
