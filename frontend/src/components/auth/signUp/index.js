import React, { useContext } from "react";
import { RegisterContext } from "../../../contexts/register";

const Register = () => {
  const registerContext = useContext(RegisterContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    registerContext.addNewUser();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          onChange={(e) => {
            registerContext.setFirstName(e.target.value);
          }}
        ></input>
        <input
          type="text"
          placeholder="Last Name"
          onChange={(e) => {
            registerContext.setLastName(e.target.value);
          }}
        ></input>
        <input
          type="text"
          placeholder="City"
          onChange={(e) => {
            registerContext.setCity(e.target.value);
          }}
        ></input>
        <input
          type="email"
          placeholder="E-mail"
          onChange={(e) => {
            registerContext.setEmail(e.target.value);
          }}
        ></input>
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => {
            registerContext.setPassword(e.target.value);
          }}
        ></input>
        <input
          type="password"
          placeholder="Confirm Password"
          onChange={(e) => {
            registerContext.setConfirmPassword(e.target.value);
          }}
        ></input>
        <button>Sign-Up</button>
      </form>

      {registerContext.message && <div>{registerContext.message}</div>}
    </>
  );
};

export default Register;
