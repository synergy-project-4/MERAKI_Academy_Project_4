import React, { useState } from "react";
import axios from "axios";

export const ProfileContext = React.createContext();

const ProfileProvider = (props) => {
  let id;
  let token;
  
  const [found, setFound] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [city, setCity] = useState("");
  const [password, setPassword] = useState("");
  const [messageTrue, setMessageTrue] = useState("");
  const [messageFalse, setMessageFalse] = useState("");
  const [i, setI] = useState(false)
  const [confirmPassword, setConfirmPassword] = useState("")

  const state = {
    setFname,
    setLname,
    setCity,
    setPassword,
    editProfile,
    messageTrue,
    messageFalse,
    deleteProfile,
    getUser,
    found,confirmPassword,
    setConfirmPassword
  };

  async function getUser() {
    id = localStorage.getItem("id");
    token = localStorage.getItem("token");
    console.log("hereeeeeeee",id);
    try {
      await axios.get(`http://localhost:5000/profile?id=${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((result)=>{
        setFound(
          result.data
        )
        console.log(result.data);
      })
    } catch (error) {
    }
  }
if(i ===false){
  getUser()
  setI(true)
} 
  // getUser()
  async function editProfile() {
    token = localStorage.getItem("token");
    id = localStorage.getItem("id");
    try {
      await axios
        .put(
          `http://localhost:5000/profile/edit?id=${id}`,
          { fname, lname, city, password },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((result) => {
          console.log(result);
          setMessageTrue("Done the changes");
          setMessageFalse("");
        });
    } catch (error) {
      setMessageFalse("try again please");
      setMessageTrue("");
    }
  }

  async function deleteProfile() {
    token = localStorage.getItem("token");
    id = localStorage.getItem("id");
    try {
      await axios.delete(`http://localhost:5000/profile/edit?id=${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      } );
      setMessageTrue("account deleted");
      setMessageFalse("");
    } catch (error) {
      setMessageFalse("try again please");
      setMessageTrue("");
    }
  }

  return (
    <ProfileContext.Provider value={state}>
      {props.children}
    </ProfileContext.Provider>
  );
};

export default ProfileProvider;
