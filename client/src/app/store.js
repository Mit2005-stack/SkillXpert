import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/features/authslice";
import rootReducer from "./rootReducer";
import { authApi } from "@/features/api/authApi";
export const appstore = configureStore({
  reducer: rootReducer, // <-- Add comma here
  middleware: (defaultMiddleware) =>
    defaultMiddleware().concat(authApi.middleware),
  });