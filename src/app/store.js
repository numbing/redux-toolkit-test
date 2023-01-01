import { configureStore } from '@reduxjs/toolkit';
import beersSlice from '../features/getBeersSlice';

export const store = configureStore({
  reducer: {
    beers: beersSlice,
  },
});
