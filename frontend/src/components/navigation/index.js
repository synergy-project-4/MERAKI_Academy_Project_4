import React from "react";
import { Link } from "react-router-dom";
import Register from "../auth/signUp/index";

const Navigation = () => {
  return (
    <div className="App">
      <Link to="/register">Register</Link>
    </div>
  );
};

export default Navigation;
