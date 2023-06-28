import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { contactsData } from '../../redux/constants';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsData,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(data) {
        return {
          payload: {
            ...data,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      return state.filter(el => el.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
