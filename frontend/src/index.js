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
import HistoryProvider from "./contexts/history";
import CartProvider from './contexts/cart'


ReactDOM.render(
  <Router>
    <LoginProvider>
      <HistoryProvider>
        <HeaderProvider>
          <CreateProductProvider>
            <ItemCardProvider>
              <RegisterProvider>
                <ProfileProvider>
                <CartProvider>
                  <App />
                  </CartProvider>
                </ProfileProvider>
              </RegisterProvider>
            </ItemCardProvider>
          </CreateProductProvider>
        </HeaderProvider>
      </HistoryProvider>
    </LoginProvider>
  </Router>,
  document.getElementById("root")
);
