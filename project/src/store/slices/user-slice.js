import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { api } from '../../index';
import { APIRoute, AuthorizationStatus } from '../../const';
import { adaptUserInfo, adaptReview } from '../../adapters';

const initialState = {
  user: {},
  reviews: [],
  authorizationStatus: AuthorizationStatus.UNKNOWN,
};

export const login = createAsyncThunk(
  'user/login',
  async ({ login: email, password }) => {
    const response = await api.post(APIRoute.LOGIN, { email, password });
    return response.data;
  },
);

export const logout = createAsyncThunk('user/logout', async () => {
  const response = await api.delete(APIRoute.LOGOUT);
  return response.data;
});

export const sendReview = createAsyncThunk(
  'user/sendReview',
  async ({ comment, rating, id }) => {
    const response = await api.post(`${APIRoute.REVIEWS}/${id}`, {
      comment,
      rating,
    });
    return response.data;
  },
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    [login.fulfilled]: (state, { payload }) => {
      localStorage.setItem('token', payload.token);
      state.user = adaptUserInfo(payload);
      state.authorizationStatus = AuthorizationStatus.AUTH;
    },
    [logout.fulfilled]: (state) => {
      localStorage.removeItem('token');
      state.authorizationStatus = AuthorizationStatus.NO_AUTH;
      state.user = {};
    },
  },
});

export default userSlice.reducer;
