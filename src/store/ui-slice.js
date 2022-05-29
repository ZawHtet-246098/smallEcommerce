import { createSlice } from "@reduxjs/toolkit";
import store from ".";

const uiSlice = createSlice({
  name: "url",
  initialState: { notification: null },
  reducers: {
    showNotification(state, action) {
      state.notification = {
        message: action.payload.message,
        type: action.payload.type,
        open: action.payload.open,
      };
    },
  },
});

export const uiSliceActions = uiSlice.actions;
export default uiSlice;
