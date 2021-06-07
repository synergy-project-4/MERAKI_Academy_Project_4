import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import RegisterProvider from "./contexts/register";
import HeaderProvider from "./contexts/header";
import LoginProvider from "./contexts/login";
import ItemCardProvider from './contexts/main'
import ProfileProvider from './contexts/profile'

ReactDOM.render(
  <Router>
  <HeaderProvider>
    <LoginProvider>
    <ItemCardProvider>
    <RegisterProvider>
      <ProfileProvider>
      <App />
      </ProfileProvider>
    </RegisterProvider>
    </ItemCardProvider>
    </LoginProvider>
    </HeaderProvider>
  </Router>,
  document.getElementById("root")
);
