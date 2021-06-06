import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import RegisterProvider from "./contexts/register";
import HeaderProvider from "./contexts/header";

ReactDOM.render(
  <Router>
    <HeaderProvider>
      <RegisterProvider>
        <App />
      </RegisterProvider>
    </HeaderProvider>
  </Router>,
  document.getElementById("root")
);
