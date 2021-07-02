import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { api } from '../../index';
import { APIRoute, AppRoute, AuthorizationStatus } from '../../const';
import { adaptUserInfo } from '../../adapters';

const SLICE_NAME = 'user';
const TOKEN = 'token';

export const ActionType = {
  CHECK_AUTH: 'user/checkAuth',
  LOGIN: 'user/login',
  LOGOUT: 'user/logout',
  SEND_REVIEW: 'user/sendReview',
  REDIRECT_TO_ROUTE: 'user/redirectToRoute',
};

const initialState = {
  user: {},
  authorizationStatus: AuthorizationStatus.UNKNOWN,
};

export const redirectToRoute = (route) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: route,
});

export const checkAuth = createAsyncThunk(ActionType.CHECK_AUTH, async () => {
  const response = await api.get(APIRoute.LOGIN);
  return response.data;
});

export const login = createAsyncThunk(
  ActionType.LOGIN,
  async ({ login: email, password }, thunkAPI) => {
    const response = await api.post(APIRoute.LOGIN, { email, password });
    thunkAPI.dispatch(redirectToRoute(AppRoute.MAIN));
    return response.data;
  },
);

export const logout = createAsyncThunk(ActionType.LOGOUT, async () => {
  const response = await api.delete(APIRoute.LOGOUT);
  return response.data;
});

export const sendReview = createAsyncThunk(
  ActionType.SEND_REVIEW,
  async ({ comment, rating, id }) => {
    const response = await api.post(`${APIRoute.REVIEWS}/${id}`, {
      comment,
      rating,
    });
    return response.data;
  },
);

const userSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  extraReducers: {
    [checkAuth.fulfilled]: (state, { payload }) => {
      state.user = adaptUserInfo(payload);
      state.authorizationStatus = AuthorizationStatus.AUTH;
    },
    [checkAuth.rejected]: (state) => {
      state.authorizationStatus = AuthorizationStatus.NO_AUTH;
    },
    [login.fulfilled]: (state, { payload }) => {
      localStorage.setItem(TOKEN, payload.token);
      state.user = adaptUserInfo(payload);
      state.authorizationStatus = AuthorizationStatus.AUTH;
    },
    [logout.fulfilled]: (state) => {
      localStorage.removeItem(TOKEN);
      state.authorizationStatus = AuthorizationStatus.NO_AUTH;
      state.user = {};
    },
  },
});

export default userSlice.reducer;
