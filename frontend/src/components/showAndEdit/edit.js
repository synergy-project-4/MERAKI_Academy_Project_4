import React, { useContext, useEffect, useState } from "react";
import { ShowAndEditContext } from "../../contexts/showAndEdit";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./showAndEdit.css";

const Edit = () => {
  const showAndEditContext = useContext(ShowAndEditContext);
  const history = useHistory();

  useEffect(() => {
    // showAndEditContext.show();
    setAllInput();
  }, [showAndEditContext.item]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const setAllInput = () => {
    showAndEditContext.setTitle(showAndEditContext.item.title);
    showAndEditContext.setTags(showAndEditContext.item.tags);
    showAndEditContext.setDescription(showAndEditContext.item.description);
    showAndEditContext.setPrice(showAndEditContext.item.price);
    showAndEditContext.setQuantity(showAndEditContext.item.quantity);
    showAndEditContext.setOptionsToExchange(
      showAndEditContext.item.optionsToExchange
    );
    showAndEditContext.setItemLength(showAndEditContext.item.itemLength);
    showAndEditContext.setItemHeight(showAndEditContext.item.itemHeight);
    showAndEditContext.setItemWidth(showAndEditContext.item.itemWidth);
    showAndEditContext.setItemWeight(showAndEditContext.item.itemWeight);
    showAndEditContext.setLocation(showAndEditContext.item.location);
    showAndEditContext.setShortDescription(
      showAndEditContext.item.shortDescription
    );
    showAndEditContext.setImage(showAndEditContext.item.image);
  };

  return (
    <>
      <div className="edit-page">
        <div className="edit-info">
          <form>
            <div onClick={handleSubmit}>edit product</div>
            <div>
              <div>
                <div>
                  <input
                    placeholder="Title (name of the product)"
                    type="text"
                    defaultValue={showAndEditContext.item.title}
                    onChange={(e) => {
                      showAndEditContext.setTitle(e.target.value);
                    }}
                  />
                  <input
                    placeholder="Tags (item category)"
                    type="text"
                    defaultValue={showAndEditContext.item.tags}
                    onChange={(e) => {
                      showAndEditContext.setTags(e.target.value);
                    }}
                  />
                  <input
                    placeholder="Description (describe the item)"
                    type="text"
                    defaultValue={showAndEditContext.item.description}
                    onChange={(e) => {
                      showAndEditContext.setDescription(e.target.value);
                    }}
                  />
                  <input
                    placeholder="Price (item cost)"
                    type="text"
                    defaultValue={showAndEditContext.item.price}
                    onChange={(e) => {
                      showAndEditContext.setPrice(e.target.value);
                    }}
                  />
                  <input
                    placeholder="Quantity (number of items for sale )"
                    type="number"
                    defaultValue={showAndEditContext.item.quantity}
                    onChange={(e) => {
                      showAndEditContext.setQuantity(e.target.value);
                    }}
                  />
                  <input
                    placeholder="Open For Exchange (true or false)"
                    type="boolean"
                    defaultValue={showAndEditContext.item.optionsToExchange}
                    onChange={(e) => {
                      showAndEditContext.setOptionsToExchange(
                        Boolean(e.target.value)
                      );
                    }}
                  />
                  <input
                    placeholder="Item Length (for example : 1m , 20cm , 30mm)"
                    type="text"
                    defaultValue={showAndEditContext.item.itemLength}
                    onChange={(e) => {
                      showAndEditContext.setItemLength(e.target.value);
                    }}
                  />
                  <input
                    placeholder="Item Height (for example : 1m , 20cm , 30mm)"
                    type="text"
                    defaultValue={showAndEditContext.item.itemHeight}
                    onChange={(e) => {
                      showAndEditContext.setItemHeight(e.target.value);
                    }}
                  />
                  <input
                    placeholder="Item Width (for example : 1m , 20cm , 30mm)"
                    type="text"
                    defaultValue={showAndEditContext.item.itemWidth}
                    onChange={(e) => {
                      showAndEditContext.setItemWidth(e.target.value);
                    }}
                  />
                  <input
                    placeholder="Item Weight (for example : 3kg , 200mg )"
                    type="text"
                    defaultValue={showAndEditContext.item.itemWeight}
                    onChange={(e) => {
                      showAndEditContext.setItemWeight(e.target.value);
                    }}
                  />
                  <input
                    placeholder="Location (Pick One: Amman, Irbid, Madaba, Zarqa, Aqaba)"
                    type="text"
                    defaultValue={showAndEditContext.item.location}
                    onChange={(e) => {
                      showAndEditContext.setLocation(e.target.value);
                    }}
                  />
                  <input
                    placeholder="Short Description (Add a Short Description For The Item)"
                    type="text"
                    defaultValue={showAndEditContext.item.shortDescription}
                    onChange={(e) => {
                      showAndEditContext.setShortDescription(e.target.value);
                    }}
                  />
                  <input
                    placeholder="Image (insert image url)"
                    type="text"
                    defaultValue={showAndEditContext.item.image}
                    onChange={(e) => {
                      showAndEditContext.setImage(e.target.value);
                    }}
                  />
                </div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    showAndEditContext.editProduct(showAndEditContext.item._id);
                  }}
                >
                  done
                </button>
                {showAndEditContext.messageTrue && (
                  <div>{showAndEditContext.messageTrue}</div>
                )}
                {showAndEditContext.messageFalse && (
                  <div>{showAndEditContext.messageFalse}</div>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Edit;
