// // import React from "react";
// import { useNavigate } from "react-router-dom";
// import style from "./../styles/Auth.module.css";
// import heroImg from "./../assets/signup-banner.png";
// import { Formik, useFormik } from "formik";
// import * as Yup from "yup";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useRef, useState } from "react";
// import convertToBase64 from "../helper/convert";
// const Register = () => {
//   interface formDetail {
//     profile_img: string;
//     name: string;
//     email: string;
//     phone_number: string;
//     password: string;
//     confirm_pwd: string;
//   }
//   const int: formDetail = {
//     profile_img: "",
//     name: "",
//     email: "",
//     phone_number: "",
//     password: "",
//     confirm_pwd: "",
//   };
//   const [file, setFile] = useState("");

//   const validateRegister = (values: formDetail) => {
//     // values.profile_img values.name values.email values.phone_number values.password values.confirm_pwd
//     // errors.profile_img errors.name errors.email errors.phone_number errors.password errors.confirm_pwd
//     const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
//     let errors: formDetail = {
//       profile_img: "",
//       name: "",
//       email: "",
//       phone_number: "",
//       password: "",
//       confirm_pwd: "",
//     };
//     if (!values.profile_img) {
//       errors.profile_img = "required";
//     }
//     if (!values.name) {
//       errors.name = "required";
//     }
//     if (!values.email) {
//       errors.email = "required";
//     } else if (!emailRegex.test(values.email)) {
//       errors.email = "Invalid Email Format";
//     }
//     if (!values.phone_number) {
//       errors.phone_number = "required";
//     }
//     if (!values.password) {
//       errors.password = "required";
//     }
//     if (!values.confirm_pwd) {
//       errors.confirm_pwd = "required";
//     }
//     return errors;
//   };
//   const handleSubmit = () => {
//     console.log("first");
//   };
//   const formik = useFormik({
//     initialValues: int,
//     validate: validateRegister,
//     onSubmit: () => console.log("object"),
//   });
//   const profile_img_ref: any = useRef(null);
//   const onUpload = async (e) => {
//     const base64: any = await convertToBase64(e.target.files[0]);
//     setFile(base64);
//     formik.setFieldValue("profile_img", base64);
//   };

//   const navigate = useNavigate();
//   return (
//     <>
//       <div className={style.containerRegister}>
//         <div className={style.formContainer}>
//           <h1 className="title">Sign Up</h1>
//           <Formik>
//             <div></div>
//           </Formik>
//           <form className={style.form} onSubmit={formik.handleSubmit}>
//             <div className="inputFile">
//               <img src={file || ""} alt="" />
//               <label htmlFor="profile_img">
//                 +Photo
//                 <input
//                   type="file"
//                   name="profile_img"
//                   id="profile_img"
//                   className="profile_img"
//                   placeholder="Enter the name"
//                   onChange={onUpload}
//                 />
//               </label>
//               {formik.touched.profile_img && formik.errors.profile_img ? (
//                 <span className="error">{formik.errors.profile_img}</span>
//               ) : null}
//             </div>
//             <div className="inputField">
//               <label htmlFor="name">Name</label>
//               <input
//                 type="text"
//                 className="input"
//                 name="name"
//                 id="name"
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 value={formik.values.name}
//                 placeholder="Enter the name"
//               />

//               {formik.touched.name && formik.errors.name ? (
//                 <span className="error">{formik.errors.name}</span>
//               ) : null}
//             </div>
//             <div className="inputField">
//               <label htmlFor="email">Email</label>
//               <input
//                 type="email"
//                 className="input"
//                 name="email"
//                 id="email"
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 value={formik.values.email}
//                 placeholder="Enter the email id"
//               />

//               {formik.touched.email && formik.errors.email ? (
//                 <span className="error">{formik.errors.email}</span>
//               ) : null}
//             </div>
//             <div className="inputField">
//               <label htmlFor="phone_number">Phone No</label>
//               <input
//                 type="text"
//                 className="input"
//                 name="phone_number"
//                 id="phone_number"
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 value={formik.values.phone_number}
//                 placeholder="Enter the phone number"
//               />

//               {formik.touched.phone_number && formik.errors.phone_number ? (
//                 <span className="error">{formik.errors.phone_number}</span>
//               ) : null}
//             </div>
//             <div className="inputField">
//               <label htmlFor="password">Password</label>
//               <input
//                 type="password"
//                 className="input"
//                 name="password"
//                 id="password"
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 value={formik.values.password}
//                 placeholder="Enter the password"
//               />
//               {formik.touched.password && formik.errors.password ? (
//                 <span className="error">{formik.errors.password}</span>
//               ) : null}
//             </div>
//             <div className="inputField">
//               <label htmlFor="confirm_pwd">Confirm Password</label>
//               <input
//                 type="password"
//                 className="input"
//                 name="confirm_pwd"
//                 id="confirm_pwd"
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 value={formik.values.confirm_pwd}
//                 placeholder="Enter the confirmed Password"
//               />

//               {formik.touched.confirm_pwd && formik.errors.confirm_pwd ? (
//                 <span className="error">{formik.errors.confirm_pwd}</span>
//               ) : null}
//             </div>
//             <div className={style.registerBtn}>
//               <button type="submit" className={`btn ${style.submitBtn}`}>
//                 Submit
//               </button>
//               <button className={`btn ${style.resetBtn}`}>Reset</button>
//             </div>
//           </form>
//           <h4>
//             Already have an account ?{" "}
//             <span className="routeLink" onClick={() => navigate("/")}>
//               {" "}
//               Login
//             </span>
//           </h4>
//         </div>
//         <div className={style.heroImgContainer}>
//           <img src={heroImg} className={style.heroImg} alt="heroImg" />
//         </div>
//       </div>
//       <ToastContainer />
//     </>
//   );
// };

// export default Register;
// // const validationSchema = Yup.object({
// //   profile_img: Yup.string().required("Profile Img Required"),
// //   name: Yup.string().required("Required"),
// //   email: Yup.string()
// //     .email("Invalid email format")
// //     .required("email id Required"),
// //   phone_number: Yup.string()
// //     .matches(
// //       /^(?:(?:\+|0{0,2})91(\s*[-]\s*)?|[0]?)?[789]\d{9}$/,
// //       "Is not an indian Phone Number"
// //     )
// //     .required("Required"),
// //   password: Yup.string()
// //     .matches(
// //       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/,
// //       "Password Should contain 8-10 characters,one uppercase and lowercase letter, one number and special character: "
// //     )
// //     .required("Required"),
// //   confirm_pwd: Yup.string().oneOf(
// //     [Yup.ref("password"), ""],
// //     "Passwords must match"
// //   ),
// // });
import React from "react";
import { Formik } from "formik";

const Register = () => (
  <div>
    <h1>Anywhere in your app!</h1>
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}
          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && errors.password}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default Register;
