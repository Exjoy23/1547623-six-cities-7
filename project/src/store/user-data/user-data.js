import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../const';
import { loadUserInfo, logout, requireAuthorization } from '../actions';

const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  user: {},
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
});

export { userData };
