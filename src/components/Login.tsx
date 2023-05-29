// import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import style from "./../styles/Auth.module.css";
import heroImg from "./../assets/signup-banner.png";
import { checkIfUserExists } from "../authentication/authentication";
import { int, loginValidateSchema } from "../validation/validationScema";
import { replace, useFormik } from "formik";
import { useAppDispatch } from "../hooks/hook";
import { DummyDataInter, addCurrentUser } from "../slice/Slice";
import { useEffect } from "react";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogIn = async () => {
    if (checkIfUserExists(formik.values.email, formik.values.password)) {
      // user already exists
      formik.resetForm();
      const emailExists = await userData.filter((user: DummyDataInter) => {
        if (user.email === formik.values.email) {
          return user;
        }
      });
      dispatch(addCurrentUser(emailExists[0]));
      navigate("/home");
    } else {
      alert("User does not exists");
    }
  };
  const handleReset = () => {
    formik.resetForm();
  };
  const formik = useFormik({
    initialValues: int,
    validationSchema: loginValidateSchema,
    onSubmit: handleLogIn,
  });
  const currentUser = JSON.parse(localStorage.getItem("CurrentData")!); //
  const userData = JSON.parse(localStorage.getItem("UserData")!); //
  const get_log_info = () => {
    if (currentUser) {
      return true;
    } else {
      return false;
    }
  };
  useEffect(() => {
    if (get_log_info()) {
      navigate("/home", { replace: true });
    } else {
      navigate("/signup", { replace: true });
    }
  }, [get_log_info()]);
  return (
    <>
      {get_log_info() ? (
        <Navigate to={"/home"} />
      ) : (
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
                <button
                  className={`btn ${style.resetBtn}`}
                  onClick={handleReset}
                >
                  Reset
                </button>
              </div>
            </form>
            <h4>
              Don't have an account ?
              <span
                className="routeLink RegisterRoute"
                onClick={() => navigate("/signup")}
              >
                &nbsp;Register
              </span>
            </h4>
          </div>
          <div className={style.heroImgContainer}>
            <img src={heroImg} className={style.heroImg} alt="heroImg" />
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
