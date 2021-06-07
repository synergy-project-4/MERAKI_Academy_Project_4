import React, { useState } from "react";
import axios from "axios";

export const ProfileContext = React.createContext();

const ProfileProvider = (props) => {
  const [newName, setNewName] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  const state = {
    setNewName,
    setNewPassword,
    message,
    editProfile,
    logOut,
    deleteProfile
  };
   
  async function editProfile(e) {
    try {
      await axios.put("http://localhost:5000/profile/edit", e.target.value);
      setMessage("Done the changes")
    } catch (error) {
      setMessage("try again please");
    }
  }

  async function deleteProfile(e) {
    try {
      await axios.delete("http://localhost:5000/profile/edit", e.target.value);
      setMessage("account deleted")
    } catch (error) {
      setMessage("try again please");
    }
  }

  async function logOut(e) {
    try {
      await axios.get("http://localhost:5000/profile/edit", e.target.value);
      setMessage("done")
    } catch (error) {
      setMessage("try again please");
    }
  }

  return (
    <ProfileContext.Provider value={state}>
      {props.children}
    </ProfileContext.Provider>
  );
};

export default ProfileProvider;
