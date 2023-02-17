import { createSlice, nanoid } from '@reduxjs/toolkit';
import { INITIAL_CONTACTS } from './constants';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: INITIAL_CONTACTS,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(contact) {
        return { payload: { ...contact, id: nanoid() } };
      },
    },

    deleteContact: (state, action) =>
      state.filter(contact => contact.id !== action.payload),
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
