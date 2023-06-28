import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    addFilter(state, action) {
      return (state = action.payload);
    },
    resetFilter(state) {
      state = '';
    },
  },
});

export const { addFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
