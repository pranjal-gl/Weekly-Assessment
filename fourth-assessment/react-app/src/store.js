import { configureStore } from '@reduxjs/toolkit';
import userReducer from './useSlice'

const user = configureStore({
  reducer: {
    user: userReducer
  }
})
export default user;