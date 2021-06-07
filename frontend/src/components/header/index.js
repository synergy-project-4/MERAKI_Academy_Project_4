import React, { useState, useContext } from "react";
import { HeaderContext } from "../../../src/contexts/header";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./header.css";

const Header = () => {
  const headerContext = useContext(HeaderContext);
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleClick = () => {
    history.push("/");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="navBar">
          <div className="leftNavBar">
            <p onClick={handleClick} className="websiteName">WebsiteName</p>
            <select
              onChange={(e) => {
                headerContext.filterItem(e);
              }}
              name="filter"
            >
              <option value="">price</option>
              <option value="price"></option>
              <option value="location">Location</option>
            </select>
            <select
              onChange={(e) => {
                headerContext.filterItem(e);
              }}
              name="location"
            >
              <option value="">Location</option>
              <option value="irbid">Irbid</option>
              <option value="amman">Amman</option>
              <option value="madaba">Madaba</option>
              <option value="zarqa">Zarqa</option>
              <option value="aqaba">Aqaba</option>
            </select>
            <input
              onChange={(e) => {
                headerContext.setTitle(e.target.value);
              }}
              placeholder="Search"
            />
            <button
              onClick={(e) => {
                headerContext.searchItem();
              }}
            >
              search
            </button>
          </div>
          <div className="rightNavBar">
            {" "}
            <Link to="/login">login</Link>
          </div>
        </div>
      </form>
      {headerContext.message && <div>{headerContext.message}</div>}
    </>
  );
};

export default Header;
