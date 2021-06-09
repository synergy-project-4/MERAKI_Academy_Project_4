import React, { useContext,useEffect, useState } from "react";
import { LoginContext } from "./login";
import axios from "axios";

export const PendingApprovalContext = React.createContext();

const PendingApprovalProvider = (props) => {
    const loginContext = useContext(LoginContext);

    const state = {

    }
    return (
        <PendingApprovalContext.Provider value={state}>
          {props.children}
        </PendingApprovalContext.Provider>
      );
    };
    
    export default PendingApprovalProvider;