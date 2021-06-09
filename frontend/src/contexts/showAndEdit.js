import React, { useContext,useEffect, useState } from "react";
import { LoginContext } from "./login";
import axios from "axios";

export const ShowAndEditContext = React.createContext();

const ShowAndEditProvider = (props) => {
    const loginContext = useContext(LoginContext);

    const state = {

    }
    return (
        <ShowAndEditContext.Provider value={state}>
          {props.children}
        </ShowAndEditContext.Provider>
      );
    };
    
    export default ShowAndEditProvider;
    