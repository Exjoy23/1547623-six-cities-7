import { createAction } from '@reduxjs/toolkit';

export const ActionType = {
  LOAD_OFFER: 'data/loadOffer',
  LOAD_OFFERS: 'data/loadOffers',
  LOAD_OFFERS_NEARBY: 'data/loadOffersNearby',
  LOAD_REVIEWS: 'data/loadReviews',
  LOAD_FAVORITES: 'data/loadFavorites',
  SET_DATA_LOAD: 'data/setDataLoad',
  REQUIRE_AUTHORIZATION: 'user/requireAuthorization',
  LOAD_USER_INFO: 'user/loadUserInfo',
  LOGOUT: 'user/logout',
  SET_FAVORITES: 'ui/setFavorites',
  CHANGE_CITY: 'ui/changeCity',
  CHANGE_SORT: 'ui/changeSort',
  CHANGE_ACTIVE_CARD: 'ui/changeActiveCard',
  REDIRECT_TO_ROUTE: 'ui/redirectToRoute',
};

export const loadOffer = createAction(ActionType.LOAD_OFFER, (payload) => ({
  payload,
}));

export const loadOffers = createAction(ActionType.LOAD_OFFERS, (payload) => ({
  payload,
}));

export const loadOffersNearby = createAction(
  ActionType.LOAD_OFFERS_NEARBY,
  (payload) => ({
    payload,
  }),
);

export const loadReviews = createAction(ActionType.LOAD_REVIEWS, (payload) => ({
  payload,
}));

export const loadFavorites = createAction(
  ActionType.LOAD_FAVORITES,
  (payload) => ({
    payload,
  }),
);

export const setDataLoad = createAction(
  ActionType.SET_DATA_LOAD,
  (payload) => ({
    payload,
  }),
);

export const requireAuthorization = createAction(
  ActionType.REQUIRE_AUTHORIZATION,
  (payload) => ({
    payload,
  }),
);

export const loadUserInfo = createAction(
  ActionType.LOAD_USER_INFO,
  (payload) => ({
    payload,
  }),
);

export const logout = createAction(ActionType.LOGOUT);

export const changeActiveCity = createAction(
  ActionType.CHANGE_CITY,
  (payload) => ({
    payload,
  }),
);

export const changeActiveSort = createAction(
  ActionType.CHANGE_SORT,
  (payload) => ({
    payload,
  }),
);

export const changeActiveCard = createAction(
  ActionType.CHANGE_ACTIVE_CARD,
  (payload) => ({
    payload,
  }),
);

export const redirectToRoute = createAction(
  ActionType.REDIRECT_TO_ROUTE,
  (payload) => ({
    payload,
  }),
);
