import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children, isAdmin }) => {
  const { loading } = useSelector((state) => state.user);
  const isAuthenticated = localStorage.getItem('isAuthenticated');
  const role = localStorage.getItem('role');


  if (loading == false) {
    if (isAuthenticated == false) {
      return <Navigate to="/login" />;
    }

    if (isAdmin == true && role !== "admin") {
      return <Navigate to="/login" />;
    }
    return children;
  }
};

export default ProtectedRoute;
