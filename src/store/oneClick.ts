import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  counter: 0,
  garbageOne: {
    index: 0
  }
};

export const oneSlice = createSlice({
  name: 'one',
  initialState,
  reducers: {
    increaseCounterOne(state) {
      state.counter = state.counter + 1;
    }
  },
  selectors: {
    selectCounterOne: () => {},
    selectGarbageOneIndex: () => {}
  },
});

export const {
  name,
  actions: {
    increaseCounterOne
  },
  selectors: {
    selectCounterOne,
    selectGarbageOneIndex
  },
  reducer: oneClickReducer
} = oneSlice;
