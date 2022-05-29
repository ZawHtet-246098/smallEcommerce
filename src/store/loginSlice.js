import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "loginslice",
  initialState: {
    show: false,
    more: true,
  },
  reducers: {
    login(state) {
      state.show = true;
    },
    logout(state) {
      state.show = false;
    },
    openMoreInForm(state) {
      state.more = true;
    },
    closeMoreInForm(state) {
      state.more = false;
    },
  },
});

export const loginSliceActinos = loginSlice.actions;
export default loginSlice;
