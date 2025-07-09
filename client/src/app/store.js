import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/features/authslice";
export const appstore = configureStore({
  reducer: {
    auth: authReducer
  }});