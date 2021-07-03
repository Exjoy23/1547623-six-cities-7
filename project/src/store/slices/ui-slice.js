import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { api } from '../../index';
import {
  Locations,
  DEFAULT_SORT,
  APIRoute,
  AppRoute,
  AuthorizationStatus
} from '../../const';

import { redirectToRoute } from './user-slice';

const SLICE_NAME = 'ui';

const ActionType = {
  SET_FAVORITES: 'data/setFavorites',
};

const initialState = {
  city: Locations.PARIS,
  activeSort: DEFAULT_SORT,
  activeCard: null,
};

export const setFavorites = createAsyncThunk(
  ActionType.SET_FAVORITES,
  async ({ id, status }, thunkAPI) => {
    const authStatus = thunkAPI.getState().userSlice.authorizationStatus;

    if (authStatus !== AuthorizationStatus.AUTH) {
      thunkAPI.dispatch(redirectToRoute(AppRoute.SIGN_IN));
    }

    const response = await api.post(`${APIRoute.FAVORITES}/${id}/${status}`);
    return response.data;
  },
);

const uiSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    changeCity(state, { payload }) {
      state.city = payload;
      state.activeSort = DEFAULT_SORT;
    },
    changeSort(state, { payload }) {
      state.activeSort = payload;
    },
    changeActiveCard(state, { payload }) {
      state.activeCard = payload;
    },
  },
});

export const { changeCity, changeSort, changeActiveCard } = uiSlice.actions;
export default uiSlice.reducer;
