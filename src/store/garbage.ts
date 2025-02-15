import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  something: 0,
};

export const garbageSlice = createSlice({
  name: 'garbage',
  initialState,
  reducers: {
    increaseSomething(state) {
      state.something = state.something + 1;
    }
  }
});

export const { increaseSomething } = garbageSlice.actions;

export default garbageSlice.reducer;
