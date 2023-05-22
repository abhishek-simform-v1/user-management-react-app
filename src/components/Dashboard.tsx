import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Dashboard</h1>
      <button className="btn logoutBtn" onClick={() => navigate("/")}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
