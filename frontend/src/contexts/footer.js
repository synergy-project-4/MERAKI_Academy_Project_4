import React, { useEffect, useState, useContext } from "react";
import axios from "axios";

export const FooterContext = React.createContext();

const FooterProvider = (props) => {

    const state = {
        
    };

    return (
        <FooterContext.Provider value={state}>
          {props.children}
        </FooterContext.Provider>
      );
    };
    
    export default FooterProvider;
    