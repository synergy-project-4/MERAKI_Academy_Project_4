import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import RegisterProvider from "./contexts/register";
import LoginProvider from "./contexts/login";

ReactDOM.render(
  <Router>
    <LoginProvider>
    <RegisterProvider>
      <App />
    </RegisterProvider>
    </LoginProvider>
  </Router>,
  document.getElementById("root")
);
