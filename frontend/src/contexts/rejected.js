import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";

export const RejectedContext = React.createContext();

const RejectedProvider = (props) => {

  const state = {
  }

  return (
    <RejectedContext.Provider value={state}>
      {props.children}
    </RejectedContext.Provider>
  );
};

export default RejectedProvider;
