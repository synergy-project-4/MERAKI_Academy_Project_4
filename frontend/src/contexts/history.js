import React, { useEffect, useState } from "react";
import axios from "axios";

export const HistoryContext = React.createContext();
const HistoryProvider = (props) => {
  return (
    <HistoryContext.Provider>
      {props.children}
    </HistoryContext.Provider>
  );
};

export default HistoryProvider;
