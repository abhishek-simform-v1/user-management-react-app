import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import style from './../styles/Auth.module.css';
import heroImg from './../assets/signup-banner.png';
import { useFormik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import convertToBase64 from '../helper/convert';
import { int, validationSchema } from '../validation/validationScema';
import { useAppDispatch } from '../hooks/hook';
import { addCurrentUser, addUser } from '../slice/Slice';
import { checkIfUserExists } from '../authentication/authentication';
const Register = () => {
  const [file, setFile] = useState('');
  const dispatch = useAppDispatch();
  const handleSignUp = () => {
    console.log(formik.values.email, formik.values.phone_number);
    if (
      checkIfUserExists(
        formik.values.email,
        formik.values.password,
        formik.values.phone_number
      )
    ) {
      // user already exists
      alert('User already exists');
      formik.resetForm();
    } else {
      alert('New User Created');
      // set current user and login status
      dispatch(addUser(formik.values));
      dispatch(addCurrentUser(formik.values));
      formik.resetForm();
      navigate('/home');
    }
  };

  const formik = useFormik({
    initialValues: int,
    validationSchema: validationSchema,
    onSubmit: handleSignUp,
  });
  const onUpload = async (e: any) => {
    const base64: any = await convertToBase64(e.target.files[0]);
    setFile(base64);
    formik.setFieldValue('profile_img', base64);
  };
  const handleReset = () => {
    formik.resetForm();
  };
  const currentUser = JSON.parse(localStorage.getItem('CurrentData')!); //
  const get_log_info = () => {
    if (currentUser) {
      return true;
    } else {
      return false;
    }
  };
  const navigate = useNavigate();
  useEffect(() => {
    if (get_log_info()) {
      navigate('/home', { replace: true });
    } else {
      navigate('/signup', { replace: true });
    }
  }, [get_log_info()]);
  return (
    <>
      {get_log_info() ? (
        <Navigate to="/home" />
      ) : (
        <>
          <div className={style.container}>
            <div className={style.formContainer}>
              <h1 className="title">Sign Up</h1>

              <form className={style.form} onSubmit={formik.handleSubmit}>
                <div className="inputFile">
                  <label htmlFor="profile_img">
                    {formik.values.profile_img ? (
                      <img src={file || ''} alt="" className="fileImg" />
                    ) : (
                      <div>
                        <p style={{ textAlign: 'center' }}>+Photo</p>
                        {formik.touched.profile_img &&
                        formik.errors.profile_img ? (
                          <span className="error">
                            {formik.errors.profile_img}
                          </span>
                        ) : null}
                      </div>
                    )}
                    <input
                      type="file"
                      name="profile_img"
                      id="profile_img"
                      className="profile_img"
                      placeholder="Enter the name"
                      onChange={onUpload}
                    />
                  </label>
                </div>
                <div className="inputField">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="input"
                    name="name"
                    id="name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                    placeholder="Enter the name"
                  />

                  {formik.touched.name && formik.errors.name ? (
                    <span className="error">{formik.errors.name}</span>
                  ) : null}
                </div>
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
                  <label htmlFor="phone_number">Phone No</label>
                  <input
                    type="text"
                    className="input"
                    name="phone_number"
                    id="phone_number"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone_number}
                    placeholder="Enter the phone number"
                  />

                  {formik.touched.phone_number && formik.errors.phone_number ? (
                    <span className="error">{formik.errors.phone_number}</span>
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
                <div className="inputField">
                  <label htmlFor="confirm_pwd">Confirm Password</label>
                  <input
                    type="password"
                    className="input"
                    name="confirm_pwd"
                    id="confirm_pwd"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.confirm_pwd}
                    placeholder="Enter the confirmed Password"
                  />

                  {formik.touched.confirm_pwd && formik.errors.confirm_pwd ? (
                    <span className="error">{formik.errors.confirm_pwd}</span>
                  ) : null}
                </div>
                <div className={style.registerBtn}>
                  <button type="submit" className={`btn ${style.submitBtn}`}>
                    Submit
                  </button>
                  <button
                    onClick={handleReset}
                    className={`btn ${style.resetBtn}`}
                  >
                    Reset
                  </button>
                </div>
              </form>
              <h4>
                Already have an account ?
                <span className="routeLink" onClick={() => navigate('/')}>
                  &nbsp; Login
                </span>
              </h4>
            </div>
            <div className={style.heroImgContainer}>
              <img src={heroImg} className={style.heroImg} alt="heroImg" />
            </div>
          </div>
          <ToastContainer />
        </>
      )}
    </>
  );
};

export default Register;
