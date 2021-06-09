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
import ShowAndEditProvider from "./contexts/showAndEdit";
import PendingApprovalProvider from "./contexts/pendingApproval";

ReactDOM.render(
  <Router>
    <LoginProvider>
      <ShowAndEditProvider>
        <PendingApprovalProvider>
          <HistoryProvider>
            <HeaderProvider>
              <CreateProductProvider>
                <ItemCardProvider>
                  <RegisterProvider>
                    <ProfileProvider>
                      <App />
                    </ProfileProvider>
                  </RegisterProvider>
                </ItemCardProvider>
              </CreateProductProvider>
            </HeaderProvider>
          </HistoryProvider>
        </PendingApprovalProvider>
      </ShowAndEditProvider>
    </LoginProvider>
  </Router>,
  document.getElementById("root")
);
