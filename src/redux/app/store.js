import { configureStore } from '@reduxjs/toolkit';
import toastsReducer from '../features/toastSlice';
import authReducer from '../features/authSlice';
import modalReducer from '../features/modalSlice';
import newBookingReducer from '../features/newBooking';

const store = configureStore({
  reducer: {
    auth: authReducer,
    toasts: toastsReducer,
    modal: modalReducer,
    newBooking: newBookingReducer,
  },
  devTools: import.meta.env.MODE !== 'production',
});

export default store;
