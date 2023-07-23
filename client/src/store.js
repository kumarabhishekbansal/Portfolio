import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from './components/Reducer/AuthSlice';
export const store = configureStore({
  reducer: {
    auth: AuthReducer,
  },

});