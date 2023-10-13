// store.js
import { configureStore } from '@reduxjs/toolkit';
import editOrderSlice from "../feature/editOrderSlice";

const store = configureStore({
  reducer: editOrderSlice,
});
  
export default store;
