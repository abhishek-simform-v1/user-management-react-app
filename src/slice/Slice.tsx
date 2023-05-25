import { createSlice, isAction } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface DummyDataInter {
  profile_img: string;
  name: string;
  email: string;
  phone_number: string;
  password: string;
  confirm_pwd: string;
}
export type initType = {
  currentUser: DummyDataInter;
  users: DummyDataInter[];
  logedIn: boolean;
};

const init: initType = {
  currentUser: {
    profile_img: "",
    name: "",
    email: "",
    phone_number: "",
    password: "",
    confirm_pwd: "",
  },
  users: JSON.parse(localStorage.getItem("user")!) || [],
  logedIn: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState: init,
  reducers: {
    addUser: (state, action: PayloadAction<DummyDataInter>) => {
      state.users.push(action.payload);
      localStorage.setItem("UserData", JSON.stringify(state.users));
      state.logedIn = true;
    },
    addCurrentUser: (state, action: PayloadAction<DummyDataInter>) => {
      state.currentUser = action.payload;
      state.logedIn = true;
      localStorage.setItem("CurrentData", JSON.stringify(state.currentUser));
    },
    logOutUser: (state) => {
      state.logedIn = false;
      localStorage.removeItem("CurrentData");
    },
  },
});

export const { addUser, addCurrentUser, logOutUser } = userSlice.actions;

export default userSlice.reducer;
