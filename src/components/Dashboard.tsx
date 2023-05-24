import React from "react";
import { Navigate, redirect, useNavigate } from "react-router-dom";
import { useAppSelector } from "../hooks/hook";
import style from "./../styles/Auth.module.css";
import Table from "../dashboard/TableData/Table";

const Dashboard = () => {
  const navigate = useNavigate();
  const loginInfo = useAppSelector((state) => state.user.logedIn);
  console.log(loginInfo);
  return (
    <>
      {loginInfo ? (
        <div className={style.containerRegister}>
          <div className={style.dashboard}>
            <Table />
            <button className="btn logoutBtn" onClick={() => navigate("/")}>
              Logout
            </button>
          </div>
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default Dashboard;
