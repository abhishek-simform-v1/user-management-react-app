import { createSlice, isAction } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
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
};

const init: initType = {
  currentUser: JSON.parse(localStorage.getItem('CurrentData')!),
  users: JSON.parse(localStorage.getItem('UserData')!) || [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState: init,
  reducers: {
    addUser: (state, action: PayloadAction<DummyDataInter>) => {
      state.users.push(action.payload);
      localStorage.setItem('UserData', JSON.stringify(state.users));
    },
    addCurrentUser: (state, action: PayloadAction<DummyDataInter>) => {
      state.currentUser = action.payload;
      localStorage.setItem('CurrentData', JSON.stringify(state.currentUser));
    },
    logOutUser: () => {
      localStorage.removeItem('CurrentData');
    },
  },
});

export const { addUser, addCurrentUser, logOutUser } = userSlice.actions;

export default userSlice.reducer;
