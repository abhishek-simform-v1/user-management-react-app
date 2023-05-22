// import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./../styles/Auth.module.css";
import heroImg from "./../assets/signup-banner.png";
const Login = () => {
  const navigate = useNavigate();
  return (
    <div className={style.containerRegister}>
      {/* Register
      <button onClick={() => navigate("/")}>Login</button> */}
      <div className={style.formContainer}>
        <h1 className="title">Log in</h1>
        <form className={style.form}>
          <div className="inputField">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="input"
              name="email"
              id="email"
              placeholder="Enter the email id"
            />
            <span className="error">hi</span>
          </div>
          <div className="inputField">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="input"
              name="password"
              id="password"
              placeholder="Enter the password"
            />
            <span className="error">hi</span>
          </div>
          <div className={style.registerBtn}>
            <button
              className={`btn ${style.submitBtn}`}
              onClick={() => navigate("/dashboard")}
            >
              Submit
            </button>
            <button className={`btn ${style.resetBtn}`}>Reset</button>
          </div>
        </form>
        <h4>
          Don't have an account ?
          <span
            className="routeLink RegisterRoute"
            onClick={() => navigate("/register")}
          >
            &nbsp;Register
          </span>
        </h4>
      </div>
      <div className={style.heroImgContainer}>
        <img src={heroImg} className={style.heroImg} alt="heroImg" />
      </div>
    </div>
  );
};

export default Login;
