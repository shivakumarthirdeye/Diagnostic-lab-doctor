import { createSlice } from '@reduxjs/toolkit';
import {
  getTokens,
  getUser,
  removeTokens,
  saveAccessTokens,
  saveTokens,
  saveUser,
} from '../../utils/helper';

const initialState = {
  accessToken: getTokens().accessToken,
  user: getUser(),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      const { accessToken } = action.payload;

      state.accessToken = accessToken;

      saveTokens(accessToken);
    },
    logoutUser: state => {
      removeTokens();
      window.location.reload();
    },

    setCurrentUser: (state, action) => {
      state.user = action.payload;
      saveUser(action.payload);
    },
  },
});

// action creators
export const {
  loginUser,
  logoutUser,
  setAccessToken,
  setCurrentUser,
  setEmailVerified,
} = authSlice.actions;

// reducer
export default authSlice.reducer;
