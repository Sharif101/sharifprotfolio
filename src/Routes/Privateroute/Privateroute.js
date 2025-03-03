import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Privateroute = ({ children }) => {
  const { user } = useContext(AuthContext);

  let location = useLocation();
  if (user && user.uid) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};
export default Privateroute;
