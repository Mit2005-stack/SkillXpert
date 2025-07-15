import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/features/authslice";
import rootReducer from "./rootReducer";
import { authApi } from "@/features/api/authApi";
import { courseApi } from "@/features/api/courseApi";
export const appstore = configureStore({
  reducer: rootReducer, // <-- Add comma here
  middleware: (defaultMiddleware) =>
    defaultMiddleware().concat(authApi.middleware, courseApi.middleware),
  });

  const initializeApp = async() => {
      await appstore.dispatch(authApi.endpoints.loadUser.initiate({},{forceRefetch:true}))
  }
  initializeApp();