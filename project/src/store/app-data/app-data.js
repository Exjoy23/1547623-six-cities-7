import { createReducer } from '@reduxjs/toolkit';
import {
  loadFavorites,
  loadOffer,
  loadOffers,
  loadOffersNearby,
  loadReviews,
  setDataLoad,
  setFavoritesItem,
} from '../actions';

const initialState = {
  offer: {},
  offers: [],
  offersNearby: [],
  reviews: [],
  favorites: [],
  isDataLoaded: false,
};

const appData = createReducer(initialState, {
  [loadOffer]: (state, { payload }) => {
    state.offer = payload;
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
  [setFavoritesItem]: (
    { offer, offers, offersNearby, favorites },
    { payload },
  ) => {
    if (offer.id === payload.id) {
      offer.isFavorite = payload.isFavorite;
    }

    if (favorites.some((item) => item.id === payload.id)) {
      favorites.find((item) => item.id === payload.id).isFavorite =
        payload.isFavorite;
    }

    if (offersNearby.some((item) => item.id === payload.id)) {
      offersNearby.find((item) => item.id === payload.id).isFavorite =
        payload.isFavorite;
    }

    offers.find((item) => item.id === payload.id).isFavorite =
      payload.isFavorite;
  },
});

export { appData };
