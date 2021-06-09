import React, { useContext, useEffect, useState } from "react";
import { ShowAndEditContext } from "../../contexts/showAndEdit";
import axios from "axios";
import { useHistory } from "react-router-dom";

const ShowAndEdit = () => {
  const showAndEditContext = useContext(ShowAndEditContext);
  const history = useHistory();

  return (
    <>
      <div>
          <h3>Show And Edit</h3>
      </div>
    </>
  );
};

export default ShowAndEdit;
