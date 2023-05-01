import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Contact, ContactState } from "./type";

const initialState: ContactState = [];

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addContact: (state: ContactState, action: PayloadAction<Contact>) => {
      state.push(action.payload);
    },
    editContact: (state: ContactState, action: PayloadAction<Contact>) => {
      const { id, first_name, last_name, status } = action.payload;
      const existingUser = state.find((contact) => contact.id === id);
      if (existingUser) {
        existingUser.first_name = first_name;
        existingUser.last_name = last_name;
        existingUser.status = status;
      }
    },
    deleteContact: (
      state: ContactState,
      action: PayloadAction<{ id: string }>
    ) => {
      const { id } = action.payload;
      const existingUser = state.find((contact) => contact.id === id);
      if (existingUser) {
        return state.filter((contact) => contact.id !== id);
      }
    },
  },
});

export const { addContact, editContact, deleteContact } = contactSlice.actions;
export default contactSlice.reducer;
