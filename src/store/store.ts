import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./contact/ContactSlice";
// CONFIGURE STORE HERE
export const store = configureStore({
  reducer: {
    contact: contactReducer,
  },
});
