import MockAdapter from 'axios-mock-adapter';

import { createAPI } from '../services/api';
import { ActionType } from './actions';
import {
  checkAuth,
  login,
  fetchOffer,
  // fetchOffersNearby,
  fetchFavorites,
  logout
  // setFavorites,
  // fetchReviews
} from './api-actions';
import { APIRoute, AppRoute, AuthorizationStatus } from '../const';

let api = null;

describe('Async operations', () => {
  beforeAll(() => {
    api = createAPI(() => {});
  });

  it('should make a correct API call to GET /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = checkAuth();

    apiMock.onGet(APIRoute.LOGIN).reply(200, [{ fake: true }]);

    return checkAuthLoader(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.REQUIRE_AUTHORIZATION,
        payload: AuthorizationStatus.AUTH,
      });
    });
  });

  it('should make a correct API call to POST /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeUser = {
      avatarUrl: 'img/1.png',
      email: 'Oliver.conner@gmail.com',
      id: 1,
      isPro: false,
      name: 'Oliver.conner',
    };
    const loginLoader = login(fakeUser);

    apiMock.onPost(APIRoute.LOGIN).reply(200, [{ fake: true }]);

    return loginLoader(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(3);

      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: ActionType.REQUIRE_AUTHORIZATION,
        payload: AuthorizationStatus.AUTH,
      });

      expect(dispatch).toHaveBeenNthCalledWith(3, {
        type: ActionType.REDIRECT_TO_ROUTE,
        payload: AppRoute.MAIN,
      });
    });
  });

  it('should make a correct API call to DELETE /logout', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const closeSession = logout();

    apiMock.onDelete(APIRoute.LOGOUT).reply(204);

    return closeSession(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.LOGOUT,
      });
    });
  });

  it('should make a correct API call to GET /offer', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offerLoader = fetchOffer(23);

    apiMock.onGet(`${APIRoute.OFFERS}/23`).reply(200, [{ fake: true }]);

    return offerLoader(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(2);

      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.SET_DATA_LOAD,
        payload: false,
      });

      // expect(dispatch).toHaveBeenNthCalledWith(2, {
      //   type: ActionType.LOAD_OFFER,
      //   payload: [{ fake: false }],
      // });
    });
  });

  // it('should make a correct API call to GET /offers nearby', () => {
  //   const apiMock = new MockAdapter(api);
  //   const dispatch = jest.fn();
  //   const offersNearbyLoader = fetchOffersNearby(23);

  //   apiMock
  //     .onGet(`${APIRoute.OFFERS}/23${APIRoute.OFFERS_NEARBY}`)
  //     .reply(200, [{ fake: true }]);

  //   return offersNearbyLoader(dispatch, () => {}, api).then(() => {
  //     expect(dispatch).toHaveBeenCalledTimes(1);
  //     expect(dispatch).toHaveBeenNthCalledWith(1, {
  //       type: ActionType.LOAD_OFFERS_NEARBY,
  //       payload: [{ fake: true }],
  //     });
  //   });
  // });

  it('should make a correct API call to GET /favorites', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoritesLoader = fetchFavorites();

    apiMock.onGet(APIRoute.FAVORITES).reply(200, [{ fake: true }]);

    return favoritesLoader(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(2);

      // expect(dispatch).toHaveBeenNthCalledWith(2, {
      //   type: ActionType.LOAD_FAVORITES,
      //   payload: [{ fake: false }],
      // });
    });
  });

  // it('should make a correct API call to POST /reviews', () => {
  //   const apiMock = new MockAdapter(api);
  //   const dispatch = jest.fn();
  //   const sendReviewAction = fetchReviews({
  //     comment: 'hello',
  //     rating: '5',
  //     id: 23,
  //   });

  //   apiMock.onPost(`${APIRoute.REVIEWS}/23`).reply(200, [{ fake: true }]);

  //   return sendReviewAction(dispatch, () => {}, api).then(() => {
  //     expect(dispatch).toHaveBeenCalledTimes(2);

  //     expect(dispatch).toHaveBeenNthCalledWith(2, {
  //       type: ActionType.LOAD_FAVORITES,
  //       payload: [{ fake: false }],
  //     });
  //   });
  // });
});
