import React, { useState, useContext } from "react";
import { ProfileContext } from "../../../src/contexts/profile";
import { Link } from "react-router-dom";
import "./profile.css";

const Header = () => {
  const profileContext = useContext(ProfileContext);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form className="profile" onSubmit={handleSubmit}>
        <div>
          <Link className="link" to="/profile/edit">
            edit profile
          </Link>
          <Link className="link" to="/profile/edit">
            manage product
          </Link>
          <Link className="link" to="/profile/edit">
            create product
          </Link>
          <Link className="link" to="/profile/edit">
            show and edit
          </Link>
          <Link className="link" to="/profile/edit">
            history
          </Link>
          <Link className="link" to="/profile/edit">
            pending approval
          </Link>
          <Link className="link" to="/logout">
            signOut
          </Link>
        </div>
      </form>
    </>
  );
};

export default Header;
