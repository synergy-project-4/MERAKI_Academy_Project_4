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
    // console.log("AAA", headerContext.filterLocation);
    // console.log({a:headerContext.filterLocation})
    if (headerContext.filterLocation !== "") {
      console.log("RUNNNNNNN");
      headerContext.searchItem();
    }
    // if(headerContext.filterLocation === ''){
    //   console.log('YESSS')
    // }
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
                console.log("onnn", e.target.value);
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
              className="search-bar"
              onChange={(e) => {
                headerContext.setSearch(e.target.value);
              }}
              placeholder="Search"
            />
            <button
              className="search-button"
              onClick={(e) => {
                headerContext.searchItem();
              }}
            >
              search
            </button>
          </div>

          {loginContext.token ? (
            <div className="accountSettings">
              {/* instead of welcome it should display first name */}
              <p>{`welcome `}</p>
              <img src={logo} onClick={history.push("/cart")} />
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
