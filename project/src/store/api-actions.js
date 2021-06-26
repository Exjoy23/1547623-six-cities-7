import { ActionCreator } from './action';
import { AuthorizationStatus, APIRoute } from '../const';
import { adaptOffer, adaptReview, adaptUserInfo } from '../utils';

export const fetchOfferList = () => (dispatch, _getState, api) =>
  api.get(APIRoute.OFFERS).then(({ data }) => {
    dispatch(ActionCreator.loadOffers(data.map((item) => adaptOffer(item))));
  });

export const fetchOfferNearbyList = (id) => (dispatch, _getState, api) =>
  api
    .get(`${APIRoute.OFFERS}/${id}${APIRoute.OFFERS_NEARBY}`)
    .then(({ data }) => {
      dispatch(
        ActionCreator.loadOffersNearby(data.map((item) => adaptOffer(item))),
      );
    });

export const fetchReviewList = (id) => (dispatch, _getState, api) =>
  api.get(`${APIRoute.REVIEWS}/${id}`).then(({ data }) => {
    dispatch(ActionCreator.loadReviews(data.map((item) => adaptReview(item))));
  });

export const checkAuth = () => (dispatch, _getState, api) =>
  api
    .get(APIRoute.LOGIN)
    .then(() =>
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)),
    );

export const login =
  ({ login: email, password }) =>
    (dispatch, _getState, api) =>
      api
        .post(APIRoute.LOGIN, { email, password })
        .then(({ data }) => {
          localStorage.setItem('token', data.token);

          dispatch(ActionCreator.loadUserInfo(adaptUserInfo(data)));
        })
        .then(() =>
          dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)),
        );

export const logout = () => (dispatch, _getState, api) =>
  api
    .delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(ActionCreator.logout()));
