import React, { useEffect, useState, useContext } from "react";
import { ProfileContext } from "../../../src/contexts/profile";
import { Link } from "react-router-dom";
import "./profile.css";

const Profile = () => {
  const profileContext = useContext(ProfileContext);
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   profileContext.getUser()
  // };
  useEffect(() => {
    setAllInput();
  }, [profileContext.found]);

  const setAllInput = () => {
    profileContext.setFirstName(profileContext.found.firstName);
    profileContext.setLastName(profileContext.found.lastName);
    profileContext.setPassword(profileContext.found.password);
    profileContext.setCity(profileContext.found.city);
  };

  return (
    <>
      <div className="edit-profile-body">
        <div className="edit-profile">
          <h1>Edit profile</h1>
          <input
            className="input"
            placeholder="First Name"
            type="text"
            defaultValue={profileContext.found.firstName}
            onChange={(e) => {
              profileContext.setFirstName(e.target.value);
            }}
          />
          <input
            className="input"
            placeholder="Last Name"
            type="text"
            defaultValue={profileContext.found.lastName}
            onChange={(e) => {
              profileContext.setLastName(e.target.value);
            }}
          />
          <input
            className="input"
            placeholder="City"
            type="text"
            defaultValue={profileContext.found.city}
            onChange={(e) => {
              profileContext.setCity(e.target.value);
            }}
          />
          <input
            className="input"
            placeholder="Password"
            type="text"
            onChange={(e) => {
              profileContext.setPassword(e.target.value);
            }}
          />
          <input
            className="input"
            placeholder="Confirm Password"
            type="text"
            onChange={(e) => {
              profileContext.setConfirmPassword(e.target.value);
            }}
          />
          <button
            className="edit-profile-button"
            onClick={(e) => {
              e.preventDefault();
              profileContext.editProfile();
            }}
          >
            done
          </button>
          <button
            className="edit-profile-button"
            onClick={(e) => {
              e.preventDefault();
              profileContext.deleteProfile();
            }}
          >
            delete profile
          </button>
        </div>
        {profileContext.messageTrue && (
          <div style={{ color: "green" }}>{profileContext.messageTrue}</div>
        )}
        {profileContext.messageFalse && (
          <div style={{ color: "red" }}>{profileContext.messageFalse}</div>
        )}
      </div>
    </>
  );
};

export default Profile;
