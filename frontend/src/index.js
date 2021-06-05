import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import RegisterProvider from "./contexts/register";
import ItemCardProvider from './contexts/main'

ReactDOM.render(
  <Router>
    <ItemCardProvider>
    <RegisterProvider>
      <App />
    </RegisterProvider>
    </ItemCardProvider>
  </Router>,
  document.getElementById("root")
);
