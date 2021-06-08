import React, { useState, useContext, useEffect } from "react";
import { HeaderContext } from "../../../src/contexts/header";
import { LoginContext } from "../../../src/contexts/login";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import SettingsMenu from "./../header/edit";
import logo from './cart.png'

import "./header.css";

const Header = () => {
  const headerContext = useContext(HeaderContext);
  const history = useHistory();

  useEffect(() => {
    headerContext.searchItem();
  }, [headerContext.filterLocation]);

  const loginContext = useContext(LoginContext);
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
            <p onClick={handleClick} className="websiteName">
              WebsiteName
            </p>
            <select
              onChange={(e) => {
                headerContext.searchItem(e);
              }}
              name="filter"
            >
              <option value="">Filter</option>
              <option value="10">10</option>
              <option value="20">20</option>
            </select>
            <select
              onChange={(e) => {
                console.log("onnn", e.target.value)
                headerContext.setFilterLocation(e.target.value);
                headerContext.searchItem();
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
                headerContext.setSearch(e.target.value);
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
          {loginContext.loggedIn ? (
            <div className="rightNavBar">
              <img src={logo} onClick={history.push("/cart")}/>
              <p>{`welcome `}</p>
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
