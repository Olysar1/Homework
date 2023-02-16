import { configureStore } from "@reduxjs/toolkit";
import planReducer from "./todo/planSlice";

export const store = configureStore({
  reducer: {
    plan: planReducer,
  },
});
