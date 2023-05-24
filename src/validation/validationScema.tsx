import * as Yup from "yup";

export const int = {
  profile_img: "",
  name: "",
  email: "",
  phone_number: "",
  password: "",
  confirm_pwd: "",
};
export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(15, "Name should contain atleat 15 characters!")
    .required("Name Required!"),
  email: Yup.string()
    .required("Email Required!")
    .matches(
      /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
      "Invaild Email Format!"
    ),
  phone_number: Yup.string()
    .required("Phone Number Required!")
    .matches(
      /^(?:(?:\+|0{0,2})91(\s*[-]\s*)?|[0]?)?[789]\d{9}$/,
      "Invalid phone number!"
    ),

  password: Yup.string().required("Password Required!"),
  confirm_pwd: Yup.string()
    .required("Required!")
    .oneOf(
      [Yup.ref("password"), ""],
      "Password and Confirm password does not match!"
    ),
  profile_img: Yup.string()
    .required("You need to provide a file")
    .test("fileSize", "The file is too large", (value) => {
      // Decode the Base64 string
      function utf8_to_b64(value: string) {
        return window.btoa(unescape(encodeURIComponent(value)));
      }
      //   console.log(b64_to_utf8(value));
      const decodedData = atob(utf8_to_b64(value));

      // Calculate the file size in bytes
      const fileSizeInBytes = decodedData.length;

      // Convert bytes to kilobytes
      const fileSizeInKB = fileSizeInBytes / 1024;
      const maxSize = 2 * 1024 * 1024;
      return fileSizeInKB <= maxSize;
    })
    .test("fileType", "Invalid File Format!(should be jpg or png)", (value) => {
      if (!value) {
        return true;
      }
      function getBase64Type(value: string) {
        const typePattern = /^data:image\/([a-zA-Z]+);base64,/;
        const match = value.match(typePattern);

        if (match && match[1]) {
          return match[1]; // Return the type found in the Base64 string
        } else {
          return null; // Type not found or Base64 string is invalid
        }
      }
      const base64Type = getBase64Type(value);
      const supportedTypes = ["image/jpeg", "image/jpg", "image/png"];
      return supportedTypes.includes(`image/${base64Type}`);
    })
    .required("Profile photo Required!"),
});
// validating profile_img
export function checkIfFilesAreTooBig(files?: [File]): boolean {
  let valid = true;
  if (files) {
    files.map((file) => {
      const size = file.size / 1024 / 1024;
      if (size > 10) {
        valid = false;
      }
    });
  }
  return valid;
}

export function checkIfFilesAreCorrectType(files?: [File]): boolean {
  let valid = true;
  if (files) {
    files.map((file) => {
      if (!["application/pdf", "image/jpeg", "image/png"].includes(file.type)) {
        valid = false;
      }
    });
  }
  return valid;
}
// Login Form Validation
export const loginValues = {
  email: "",
  password: "",
};

export const loginValidateSchema = Yup.object({
  email: Yup.string()
    .required("Email Required!")
    .matches(
      /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
      "Invaild Email Format!"
    ),
  password: Yup.string().required("Password Required!"),
});
