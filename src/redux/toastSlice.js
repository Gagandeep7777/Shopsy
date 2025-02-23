// src/redux/toastSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const toastSlice = createSlice({
  name: "toast",
  initialState: {
    message: "",
    visible: false,
  },
  reducers: {
    showToast: (state, action) => {
      state.message = action.payload;
      state.visible = true;
    },
    hideToast: (state) => {
      state.visible = false;
      state.message = "";
    },
  },
});

export const { showToast, hideToast } = toastSlice.actions;

export default toastSlice.reducer;
