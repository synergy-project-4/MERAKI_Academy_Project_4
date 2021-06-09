import React, { useContext, useEffect, useState } from "react";
import { PendingApprovalContext } from "../../contexts/pendingApproval";
import axios from "axios";
import { useHistory } from "react-router-dom";

const PendingApproval = () => {
  const pendingApprovalContext = useContext(PendingApprovalContext);
  const history = useHistory();

  return (
    <>
      <div>
       <h3>Pending Approval</h3>
      </div>
    </>
  );
};

export default PendingApproval;