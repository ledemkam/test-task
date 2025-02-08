
import { configureStore } from '@reduxjs/toolkit';
import  boxReducer  from './features/boxSlices';




export const store = configureStore({
  reducer: {
    boxReducer
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;