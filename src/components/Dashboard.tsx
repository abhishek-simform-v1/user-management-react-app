import React from "react";
import { Navigate, redirect, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/hook";
import style from "./../styles/Auth.module.css";
import Table from "../dashboard/TableData/Table";
import { logOutUser } from "../slice/Slice";
import { replace } from "formik";

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const loginInfo = useAppSelector((state) => state.user.logedIn);
  console.log(loginInfo);
  const handleLogout = () => {
    navigate("/", { replace: true });
    dispatch(logOutUser());
  };
  return (
    <>
      <div className={style.containerRegister}>
        <div className={style.dashboard}>
          <Table />
          <button className="btn logoutBtn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
