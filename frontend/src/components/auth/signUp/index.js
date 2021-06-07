import React, { useContext } from "react";
import { RegisterContext } from "../../../contexts/register";
import "./signUp.css";

const Register = () => {
  const registerContext = useContext(RegisterContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    registerContext.addNewUser();
  };

  return (
    <>
      <div className="sign-up-body">
        <div className="sign-up">
          <p>WebSite Name</p>
          <p>Sign-up</p>
          <form onSubmit={handleSubmit} className="sign-up-form">
            <input
              className="input"
              type="text"
              placeholder="First Name"
              onChange={(e) => {
                registerContext.setFirstName(e.target.value);
              }}
            ></input>
            <input
              className="input"
              type="text"
              placeholder="Last Name"
              onChange={(e) => {
                registerContext.setLastName(e.target.value);
              }}
            ></input>
            <input
              className="input"
              type="text"
              placeholder="City"
              onChange={(e) => {
                registerContext.setCity(e.target.value);
              }}
            ></input>
            <input
              className="input"
              type="email"
              placeholder="E-mail"
              onChange={(e) => {
                registerContext.setEmail(e.target.value);
              }}
            ></input>
            <input
              className="input"
              type="password"
              placeholder="Password"
              onChange={(e) => {
                registerContext.setPassword(e.target.value);
              }}
            ></input>
            <input
              className="input"
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => {
                registerContext.setConfirmPassword(e.target.value);
              }}
            ></input>
            <button
              className="done-button"
              disabled={registerContext.setfirstName}
            >
              Sign-Up
            </button>
          </form>

          {registerContext.message && <div>{registerContext.message}</div>}
        </div>
      </div>
    </>
  );
};

export default Register;
