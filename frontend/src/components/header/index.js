import React, { useState, useContext, useEffect } from "react";
import { HeaderContext } from "../../../src/contexts/header";
import { LoginContext } from "../../../src/contexts/login";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import SettingsMenu from "./../header/edit";
import logo from './cart.png'
import searchIcon from './search.png'
import {CartContext} from './../../contexts/cart'

import "./header.css";
const Header = () => {
  const cartContext = useContext(CartContext);
  const headerContext = useContext(HeaderContext);
  const history = useHistory();

  useEffect(() => {
    if (headerContext.filterLocation !== "") {
      headerContext.searchItem();
    }
  }, [headerContext.filterLocation]);

  const loginContext = useContext(LoginContext);
  const handleSubmit = async (e) => {
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
            <p onClick={handleClick} className="websiteName">
              WebsiteName
            </p>

            <select
              onChange={(e) => {
                headerContext.setFilterPrice(e.target.value);
              }}
              name="filter"
            >
              <option value="">Filter</option>
              <option value="ascending">ascending</option>
              <option value="descending">descending</option>
            </select>
            <select
              onChange={(e) => {
                headerContext.setFilterLocation(e.target.value);
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
              className="search-bar"
              onChange={(e) => {
                headerContext.setSearch(e.target.value);
              }}
              placeholder="Search"
            />
             <img src={searchIcon}  onClick={(e) => {
                headerContext.searchItem();
              }} />
            {/* <button
              className="search-button"
              onClick={(e) => {
                headerContext.searchItem();
              }}
            >
              search
            </button> */}
          </div>

          {loginContext.token ? (
            <div className="accountSettings">
              {/* instead of welcome it should display first name */}
              {/* <img
                src={logo}
                onClick={() => {
                  cartContext.showCart();
                }}
              /> */}
              <p className="display-name">{`Welcome, ${loginContext.userName}`}</p>
              <img
                src={logo}
                onClick={() => {
                  cartContext.showCart();
                }}
              />
              <div>
                <SettingsMenu />
              </div>
            </div>
          ) : (
            <div className="rightNavBar">
              <Link to="/login">login</Link>
            </div>
          )}
        </div>
      </form>
      {headerContext.message && <div>{headerContext.message}</div>}
    </>
  );
};

export default Header;
