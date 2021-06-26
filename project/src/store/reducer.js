import { ActionType } from './action';

import { DEFAULT_CITY, DEFAULT_SORT, AuthorizationStatus } from '../const';

const initialState = {
  city: DEFAULT_CITY,
  activeSort: DEFAULT_SORT,
  activeCard: null,
  offers: [],
  offersNearby: [],
  reviews: [],
  user: {},
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  isDataLoaded: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload,
        activeSort: DEFAULT_SORT,
      };
    case ActionType.CHANGE_SORT:
      return {
        ...state,
        activeSort: action.payload,
      };
    case ActionType.HOVER_CARD:
      return {
        ...state,
        activeCard: action.payload,
      };
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: action.payload,
        isDataLoaded: true,
      };
    case ActionType.LOAD_OFFERS_NEARBY:
      return {
        ...state,
        offersNearby: action.payload,
      };
    case ActionType.LOAD_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
      };
    case ActionType.LOAD_USER_INFO:
      return {
        ...state,
        user: action.payload,
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.LOGOUT:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      };
    default:
      return state;
  }
};
