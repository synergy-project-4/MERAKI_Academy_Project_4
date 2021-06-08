import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import RegisterProvider from "./contexts/register";
import HeaderProvider from "./contexts/header";
import LoginProvider from "./contexts/login";
import ItemCardProvider from "./contexts/main";
import ProfileProvider from "./contexts/profile";
import CreateProductProvider from "./contexts/createProduct";

ReactDOM.render(
  <Router>
    <CreateProductProvider>
      <LoginProvider>
      <HeaderProvider>
          <ItemCardProvider>
            <RegisterProvider>
              <ProfileProvider>
                <App />
              </ProfileProvider>
            </RegisterProvider>
          </ItemCardProvider>
      </HeaderProvider>
       </LoginProvider>
    </CreateProductProvider>
  </Router>,
  document.getElementById("root")
);
