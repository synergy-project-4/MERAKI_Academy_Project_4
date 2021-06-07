import React, { useState } from "react";
import axios from "axios";

export const HeaderContext = React.createContext();

const HeaderProvider = (props) => {
  

  const [search, setSearch] = useState("");
  const [message, setMessage] = useState("");
  

  const state = {
    setSearch,
    message,
    searchItem,
    filterItem,
    
  };

  async function searchItem() {
    try {
      await axios.post("http://localhost:5000/search/product", {
        search,
      });
    } catch (error) {
      setMessage("item not found");
    }
  }

  async function filterItem(e) {
    try {
      await axios.get("http://localhost:5000/filter/product", e.target.value);
    } catch (error) {
      setMessage("item not found");
    }
  }

  return (
    <HeaderContext.Provider value={state}>
      {props.children}
    </HeaderContext.Provider>
  );
};
export default HeaderProvider;
