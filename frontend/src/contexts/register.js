import React, { useState } from "react";
import { useHistory } from "react-router-dom";

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
  const history = useHistory();
  const state = {
    setFirstName,
    setLastName,
    setCity,
    setEmail,
    setPassword,
    setConfirmPassword,
    addNewUser,
    message,
    password,
    confirmPassword,
    setMessage,
    firstName,
    lastName,
    city,
    email,
    password,
    confirmPassword,
  };

  async function addNewUser() {
    try {
      await axios
        .post("http://localhost:5000/register", {
          firstName,
          lastName,
          city,
          email,
          password,
          confirmPassword,
        })
        .then((result) => {
          if (result.status === 201) {
            setMessage("Your Account Is Ready");
            history.push("/login");
          }
        })
        .catch((err) => {
          if (!firstName) {
            setMessage("please enter your first name");
          } else if (!lastName) {
            setMessage("please enter your last name");
          } else if (!city) {
            setMessage("please enter your location");
          } else if (!email) {
            setMessage("please enter your e-mail");
          } else if (!password) {
            setMessage("please enter your password");
          } else if (!confirmPassword) {
            setMessage("please confirm your password here");
          } else if (password !== confirmPassword) {
            setMessage("password does not match");
          } else {
            setMessage("the e-mail already exist");
          }
        });
    } catch (error) {
      throw error;
    }
  }

  return (
    <RegisterContext.Provider value={state}>
      {props.children}
    </RegisterContext.Provider>
  );
};

export default RegisterProvider;
