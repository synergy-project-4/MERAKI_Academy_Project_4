import React, { useState } from "react";
import axios from "axios";

export const RegisterContext = React.createContext();

const RegisterProvider = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const state = {
    setFirstName,
    setLastName,
    setCity,
    setEmail,
    setPassword,
    setConfirmPassword,
    addNewUser,
    message,
  };

  async function addNewUser() {
    try {
      await axios.post("http://localhost:5000/register", {
        firstName,
        lastName,
        city,
        email,
        password,
        confirmPassword,
      });
      setMessage("Your Account Is Ready");
    } catch (error) {
      setMessage("An Error Has Happened, Please Try Again");
    }
  }

  return (
    <RegisterContext.Provider value={state}>
      {props.children}
    </RegisterContext.Provider>
  );
};

export default RegisterProvider;
