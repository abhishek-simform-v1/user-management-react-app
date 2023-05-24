// import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./../styles/Auth.module.css";
import heroImg from "./../assets/signup-banner.png";
import { checkIfUserExists } from "../authentication/authentication";
import { int, loginValidateSchema } from "../validation/validationScema";
import { useFormik } from "formik";
const Login = () => {
  const navigate = useNavigate();
  const handleLogIn = () => {
    if (checkIfUserExists(formik.values.email)) {
      // user already exists
      formik.resetForm();
      navigate("/dashboard");
    } else {
      alert("User does not exists");
    }
  };

  const formik = useFormik({
    initialValues: int,
    validationSchema: loginValidateSchema,
    onSubmit: handleLogIn,
  });
  return (
    <div className={style.container}>
      {/* Register
      <button onClick={() => navigate("/")}>Login</button> */}
      <div className={style.formContainer}>
        <h1 className="title">Log in</h1>
        <form className={style.form} onSubmit={formik.handleSubmit}>
          <div className="inputField">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="input"
              name="email"
              id="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              placeholder="Enter the email id"
            />

            {formik.touched.email && formik.errors.email ? (
              <span className="error">{formik.errors.email}</span>
            ) : null}
          </div>
          <div className="inputField">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="input"
              name="password"
              id="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              placeholder="Enter the password"
            />
            {formik.touched.password && formik.errors.password ? (
              <span className="error">{formik.errors.password}</span>
            ) : null}
          </div>
          <div className={style.registerBtn}>
            <button className={`btn ${style.submitBtn}`} type="submit">
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
