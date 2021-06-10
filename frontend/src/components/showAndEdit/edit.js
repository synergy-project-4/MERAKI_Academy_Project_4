import React, { useContext, useEffect, useState } from "react";
import { ShowAndEditContext } from "../../contexts/showAndEdit";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Edit = () => {
    const showAndEditContext = useContext(ShowAndEditContext);
    const history = useHistory();
  
    useEffect(() => {
      showAndEditContext.editProduct();
    }, []);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(showAndEditContext.found);
    };
    return (
      <>
      <form>
      <div onClick={handleSubmit}>edit product</div>    
      </form>
    </>
  );
};

export default Edit;