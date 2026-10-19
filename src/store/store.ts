import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import usersSlice from '../features/db_users/usersSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users : usersSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;