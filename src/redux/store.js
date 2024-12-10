// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import toastReducer from "./toastSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    toast: toastReducer,
  },
});
