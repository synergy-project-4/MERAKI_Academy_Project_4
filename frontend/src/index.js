import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import RegisterProvider from "./contexts/register";
import LoginProvider from "./contexts/login";
import ItemCardProvider from './contexts/main'


ReactDOM.render(
  <Router>
    <LoginProvider>
    <ItemCardProvider>
    <RegisterProvider>
      <App />
    </RegisterProvider>
    </ItemCardProvider>
    </LoginProvider>
  </Router>,
  document.getElementById("root")
);
