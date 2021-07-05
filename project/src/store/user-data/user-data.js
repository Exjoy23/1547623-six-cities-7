import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../const';
import {
  loadUserInfo,
  logout,
  requireAuthorization,
  setIsReviewError,
  setIsReviewSending,
  setIsReviewSuccess
} from '../actions';

const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  user: {},
  isReviewSending: false,
  isReviewSuccess: false,
  isReviewError: false,
};

const userData = createReducer(initialState, {
  [requireAuthorization]: (state, { payload }) => {
    state.authorizationStatus = payload;
  },
  [loadUserInfo]: (state, { payload }) => {
    state.user = payload;
  },
  [logout]: (state) => {
    state.authorizationStatus = AuthorizationStatus.NO_AUTH;
    state.user = {};
  },
  [setIsReviewSending]: (state, { payload }) => {
    state.isReviewSending = payload;
  },
  [setIsReviewSuccess]: (state, { payload }) => {
    state.isReviewSuccess = payload;
  },
  [setIsReviewError]: (state, { payload }) => {
    state.isReviewError = payload;
  },
});

export { userData };
