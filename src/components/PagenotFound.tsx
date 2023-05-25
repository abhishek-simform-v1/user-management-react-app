import React from "react";
import pagenotFound from "../assets/404.png";
import { useNavigate } from "react-router-dom";
const PagenotFound = () => {
  const navigate = useNavigate();
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <img src={pagenotFound} alt="" />
      <button className="btn btnHome" onClick={() => navigate("/")}>
        got to Login page
      </button>
    </div>
  );
};

export default PagenotFound;
