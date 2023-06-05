import React, { useEffect } from "react";
import { Navigate, redirect, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/hook";
import style from "./../styles/Auth.module.css";
import Table from "../dashboard/TableData/Table";
import { logOutUser } from "../slice/Slice";
import { replace } from "formik";

const Home = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/singup", { replace: true });
    dispatch(logOutUser());
  };
  const currentUser = JSON.parse(localStorage.getItem("CurrentData")!); //
  const get_log_info = () => {
    if (currentUser) {
      return true;
    } else {
      return false;
    }
  };
  let loginInfo = get_log_info();
  console.log(loginInfo);
  useEffect(() => {
    if (loginInfo) {
      navigate("/home", { replace: true });
    } else {
      navigate("/signup", { replace: true });
    }
  }, [loginInfo]);

  return (
    <>
      {loginInfo ? (
        <div className={style.containerRegister}>
          <div className={style.home}>
            <header className={style.header}>
              <nav className={style.navbar}>
                <h2>logo</h2>
                <button className="btn logoutBtn " onClick={handleLogout}>
                  Logout
                </button>
              </nav>
            </header>
            <Table />
          </div>
        </div>
      ) : (
        <Navigate to={"/signup"} />
      )}
    </>
  );
};

export default Home;
