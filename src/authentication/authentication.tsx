import { DummyDataInter } from "../slice/Slice";

export const checkIfUserExists = (email: string, phone_number?: string) => {
  const userData = JSON.parse(localStorage.getItem("UserData")!);
  if (!userData) {
    return false; // if no data is saved in local storage, return false
  }
  const emailExists = userData.some(
    (user: DummyDataInter) => user.email === email
  );
  const usernameExists = userData.some(
    (user: DummyDataInter) => user.phone_number === phone_number
  );
  return emailExists || usernameExists;
};
