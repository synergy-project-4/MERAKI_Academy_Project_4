import React, { useContext, useEffect, useState } from "react";
import { ShowAndEditContext } from "../../contexts/showAndEdit";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Delete = () => {
    const showAndEditContext = useContext(ShowAndEditContext);
    const history = useHistory();
  
    useEffect(() => {
      showAndEditContext.deleteProduct();
    }, []);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(showAndEditContext.found);
    };
    return (
      <>
      <form>
      <div onClick={handleSubmit}>delete product</div> 
      </form>
    </>
  );
};

export default Delete;