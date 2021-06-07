import React, { useState, useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import ItemCardContext from "./main";
export const HeaderContext = React.createContext();

const HeaderProvider = (props) => {
  const history = useHistory();
  const [filterLocation, setFilterLocation] = useState("");
  const [search, setSearch] = useState("");
  const [title, setTitle] = useState("");
  const [products, setProducts] = useState([]);
  const [found, setFound] = useState([]);
  const [message, setMessage] = useState("");

  const state = {
    filterLocation,
    setFilterLocation,
    found,
    setSearch,
    message,
    searchItem,
    filterItem,
    search,
  };
  async function searchItem() {
    console.log("location::", filterLocation);
    await axios.get('http://localhost:5000/main').then((result) => {
      const find = result.data.filter((elem) => {
        return ((elem.title == search || search == "" || elem.tags == search) && (elem.location == filterLocation || filterLocation == ""))
      })
      console.log(result);
      setFound(find)
      console.log("find:", find.location);
      console.log("found ;;", found)
    }).
      catch((error) => {
        throw error;
      });
    // history.push("/search/product");
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
