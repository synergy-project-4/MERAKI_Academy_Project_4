import React, { useState, useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import ItemCardContext from './main'
export const HeaderContext = React.createContext();

const HeaderProvider = (props) => {
  const history = useHistory();
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState("");
  const [found, setFound] = useState([]);
  const [message, setMessage] = useState("");
  const state = {
    found,
    setTitle,
    products,
    message,
    searchItem,
    filterItem,
    title,
  };
  async function searchItem() {

    await axios.get('http://localhost:5000/main').then((result) => {
      const find = result.data.filter((elem) => {
        return elem.title == title || elem.tags == title
      })
      console.log(result);
      setFound(find)
      console.log("find:", find);
      console.log("found ;;", found)
    }).
      catch((error) => {
        throw error;
      })
    history.push('/search/product');
  }
  async function filterItem(e) {
    console.log(e.target.value);
    try {
      await axios.get("http://localhost:5000/filter/product",
        e.target.value
      );
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
