import React, { useEffect, useState } from "react";
import Login from "../components/Login";
import Dashboard from "../components/Dashboard";
const ProtectedRoute = () => {
  //   useEffect(() => {
  const loginInfo = JSON.parse(localStorage.getItem("CurrentData")!);
  const isLogedin = () => {
    if (!loginInfo) {
      return false;
    } else return true;
  };
  //     setLogin(loginInfo.logedIn);
  //   }, [login]);
  return <>{isLogedin() ? <Dashboard /> : <Login />};</>;
};

export default ProtectedRoute;
