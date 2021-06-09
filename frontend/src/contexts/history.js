import React, { useEffect, useState ,useContext } from "react";
import axios from "axios";
import {LoginContext} from "./login"

export const HistoryContext = React.createContext();

const HistoryProvider = (props) => {
  const loginContext = useContext(LoginContext);

  const [found, setFound] = useState([]);
  const [b, setB] = useState(false)

  const state = {
    found,
    showHistory
  }

  let a

  async function showHistory() {
    console.log("aaaaaaaaaaaaaaaa");
    try {
        await axios.get('http://localhost:5000/main')
            .then((result) => {
              console.log(result.data);
              a=result.data.filter((elem)=>{
                console.log("id login",loginContext.userIdLoggedIn);
                console.log("elem.id && elem.sold",elem.userId === loginContext.userIdLoggedIn && elem.sold === true);
                console.log("elem.id",elem.userId === loginContext.userIdLoggedIn);
                console.log("elem.sold",elem.sold === true);
                return (elem.userId === loginContext.userIdLoggedIn && elem.sold === true )
                
              })
              
              console.log(found);
              setFound(a)
      
            })
    } catch (error) {
        throw error;
    }
}

// showHistory() 

  return (
    <HistoryContext.Provider value={state}>
      {props.children}
    </HistoryContext.Provider>
  );
};

export default HistoryProvider;
