import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
export const appstore = configureStore({
  reducer: {
    auth: authReducer
  }});