import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import studentReducer from './students/studentSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    students: studentReducer,
  },
});

export default store;
