import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth_slice";
import cartSlice from "./cartSlice";
import loginSlice from "./loginSlice";
import uiSlice from "./ui-slice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    cart: cartSlice.reducer,
    ui: uiSlice.reducer,
    login: loginSlice.reducer,
  },
});
export default store;
