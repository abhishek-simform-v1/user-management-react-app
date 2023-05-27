import React, { useEffect } from 'react';
import { Navigate, redirect, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/hook';
import style from './../styles/Auth.module.css';
import Table from '../dashboard/TableData/Table';
import { logOutUser } from '../slice/Slice';
import { replace } from 'formik';

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/', { replace: true });
    dispatch(logOutUser());
  };
  const currentUser = JSON.parse(localStorage.getItem('CurrentData')!); //
  const userData = JSON.parse(localStorage.getItem('UserData')!); //
  const get_log_info = () => {
    if (currentUser) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    if (!get_log_info()) {
      navigate('/', { replace: true });
    }
  }, [get_log_info()]);

  return (
    <>
      <div className={style.containerRegister}>
        <div className={style.dashboard}>
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
    </>
  );
};

export default Dashboard;
