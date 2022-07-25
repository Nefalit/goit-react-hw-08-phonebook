import { createSlice } from '@reduxjs/toolkit';

import {
  signup,
  login,
  logout,
  getCurrent,
  zeroingErr,
} from './auth-operations';

const initialState = {
  user: {},
  token: '',
  isLogin: false,
  loading: false,
  error: null,
};
const pending = store => ({
  ...store,
  loading: true,
  error: null,
});
const rejected = (store, { payload }) => ({
  ...store,
  loading: false,
  error: payload,
});
const loginTrue = (store, { payload }) => {
  store.loading = false;
  store.user = payload.user;
  store.token = payload.token;
  store.isLogin = true;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [signup.pending]: pending,
    [signup.fulfilled]: loginTrue,
    [signup.rejected]: rejected,
    [login.pending]: pending,
    [login.fulfilled]: loginTrue,
    [login.rejected]: rejected,
    [logout.pending]: pending,
    [logout.fulfilled]: () => ({ ...initialState }),
    [logout.rejected]: rejected,
    [getCurrent.pending]: pending,
    [getCurrent.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.user = payload;
      store.isLogin = true;
    },
    [getCurrent.rejected]: rejected,
    [zeroingErr]: store => ({
      ...store,
      error: null,
    }),
  },
});

export default authSlice.reducer;
