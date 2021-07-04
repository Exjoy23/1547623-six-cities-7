import { createReducer } from '@reduxjs/toolkit';
import {
  loadFavorites,
  loadOffer,
  loadOffers,
  loadOffersNearby,
  loadReviews,
  setDataLoad
} from '../actions';

const initialState = {
  offers: [],
  offersNearby: [],
  reviews: [],
  favorites: [],
  isDataLoaded: false,
};

const appData = createReducer(initialState, {
  [loadOffer]: (state, { payload }) => {
    state.offers = [payload];
  },
  [loadOffers]: (state, { payload }) => {
    state.offers = payload;
  },
  [loadOffersNearby]: (state, { payload }) => {
    state.offersNearby = payload;
  },
  [loadReviews]: (state, { payload }) => {
    state.reviews = payload;
  },
  [loadFavorites]: (state, { payload }) => {
    state.favorites = payload;
  },
  [setDataLoad]: (state, { payload }) => {
    state.isDataLoaded = payload;
  },
});

export { appData };
