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
          <p style={{ color: "black", fontSize: "30px" }}>Jordan Commerce</p>
          <p style={{ color: "black", fontSize: "25px" }}>Sign-up</p>
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
            <select
              onChange={(e) => {
                registerContext.setCity(e.target.value);
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
            {/* <input
              className="input"
              type="text"
              placeholder="City"
              onChange={(e) => {
                registerContext.setCity(e.target.value);
              }}
            ></input> */}
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
          {/* to fix the message to have succes and failure so each message would have a differnet color */}
          {registerContext.message && (
            <div style={{ color: "red" }}>{registerContext.message}</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Register;
