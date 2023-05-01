import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./contact/ContactSlice";

export const store = configureStore({
  reducer: {
    contact: contactReducer,
  },
});
