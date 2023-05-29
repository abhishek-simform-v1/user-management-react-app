import { DummyDataInter } from "../slice/Slice";

export const checkIfUserExists = (
  email: string,
  password?: string,
  phone_number?: string
) => {
  const userData = JSON.parse(localStorage.getItem("UserData") || "[]");

  if (userData.length === 0) {
    return false; // if no data is saved in local storage, return false
  } else {
    const emailExists = userData.filter((user: DummyDataInter) => {
      return user.email === email && user.password === password;
    });

    const phoneNumberExists = userData.filter((user: DummyDataInter) => {
      return user.phone_number === phone_number;
    });

    console.log(emailExists);
    console.log(phoneNumberExists);

    return emailExists.length > 0 || phoneNumberExists.length > 0;
  }
};
