import { configureStore } from '@reduxjs/toolkit';
import { oneClickReducer } from './oneClick';
import { twoClickReducer } from './twoClick';

export const store = configureStore({
  reducer: {
    one: oneClickReducer,
    two: twoClickReducer
  }
})
