import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  counter: 0,
  garbageTwo: {
    index: 0
  }
};

export const twoSlice = createSlice({
  name: 'two',
  initialState,
  reducers: {
    increaseCounterTwo(state) {
      state.counter = state.counter + 1;
    }
  },
  selectors: {
    selectCounterTwo: () => {}
  }
});

export const {
  name,
  actions: {
    increaseCounterTwo
  },
  selectors: {
    selectCounterTwo
  },
  reducer: twoClickReducer
} = twoSlice;
