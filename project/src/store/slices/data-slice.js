import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { api } from '../../index';
import { APIRoute } from '../../const';
import { adaptOffer, adaptReview } from '../../adapters';

import { logout, sendReview } from './user-slice';

const SLICE_NAME = 'data';

const ActionType = {
  LOAD_OFFER: 'data/loadOffer',
  LOAD_OFFERS: 'data/loadOffers',
  LOAD_OFFERS_NEARBY: 'data/loadOffersNearby',
  LOAD_REVIEWS: 'data/loadReviews',
  LOAD_FAVORITES: 'data/loadFavorites',
};

const initialState = {
  offers: [],
  offersNearby: [],
  reviews: [],
  favorites: [],
  isDataLoaded: false,
};

export const loadOffer = createAsyncThunk(ActionType.LOAD_OFFER, async (id) => {
  try {
    const response = await api.get(`${APIRoute.OFFERS}/${id}`);
    return response.data;
  } catch (error) {
    return null;
  }
});

export const loadOffers = createAsyncThunk(ActionType.LOAD_OFFERS, async () => {
  try {
    const response = await api.get(APIRoute.OFFERS);
    return response.data;
  } catch (error) {
    return [];
  }
});

export const loadOffersNearby = createAsyncThunk(
  ActionType.LOAD_OFFERS_NEARBY,
  async (id) => {
    try {
      const response = await api.get(
        `${APIRoute.OFFERS}/${id}${APIRoute.OFFERS_NEARBY}`,
      );
      return response.data;
    } catch (error) {
      return [];
    }
  },
);

export const loadReviews = createAsyncThunk(
  ActionType.LOAD_REVIEWS,
  async (id) => {
    try {
      const response = await api.get(`${APIRoute.REVIEWS}/${id}`);
      return response.data;
    } catch (error) {
      return [];
    }
  },
);

export const loadFavorites = createAsyncThunk(
  ActionType.LOAD_FAVORITES,
  async () => {
    try {
      const response = await api.get(APIRoute.FAVORITES);
      return response.data;
    } catch (error) {
      return [];
    }
  },
);

const dataSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  extraReducers: {
    [loadOffer.pending]: (state) => {
      state.isDataLoaded = false;
    },
    [loadOffer.fulfilled]: (state, { payload }) => {
      state.offers = payload ? [adaptOffer(payload)] : [];
      state.isDataLoaded = true;
    },
    [loadOffers.pending]: (state) => {
      state.isDataLoaded = false;
    },
    [loadOffers.fulfilled]: (state, { payload }) => {
      state.offers = payload.length ? payload.map(adaptOffer) : [];
      state.isDataLoaded = true;
    },
    [loadOffersNearby.fulfilled]: (state, { payload }) => {
      state.offersNearby = payload.length ? payload.map(adaptOffer) : [];
    },
    [loadReviews.fulfilled]: (state, { payload }) => {
      state.reviews = payload.length ? payload.map(adaptReview) : [];
    },
    [sendReview.fulfilled]: (state, { payload }) => {
      state.reviews = payload.length ? payload.map(adaptReview) : [];
    },
    [loadFavorites.pending]: (state) => {
      state.isDataLoaded = false;
    },
    [loadFavorites.fulfilled]: (state, { payload }) => {
      state.favorites = payload.length ? payload.map(adaptOffer) : [];
      state.isDataLoaded = true;
    },
    [logout.fulfilled]: (state) => {
      state.favorites = [];
    },
  },
});

export default dataSlice.reducer;
