import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import RegisterProvider from "./contexts/register";

ReactDOM.render(
  <Router>
    <RegisterProvider>
      <App />
    </RegisterProvider>
  </Router>,
  document.getElementById("root")
);
