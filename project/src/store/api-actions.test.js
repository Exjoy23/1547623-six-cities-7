import MockAdapter from 'axios-mock-adapter';

import { createAPI } from '../services/api';
import { ActionType } from './actions';
import {
  checkAuth,
  login,
  fetchOffer,
  fetchFavorites,
  logout,
  fetchOffers,
  fetchOffersNearby,
  fetchReviews,
  sendReview
} from './api-actions';
import { APIRoute, AppRoute, AuthorizationStatus } from '../const';
import { adaptOffer, adaptReview } from '../adapters';

let api = null;

const offer = {
  bedrooms: 3,
  city: {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10,
    },
    name: 'Amsterdam',
  },
  description:
    'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  goods: [
    'Heating',
    'Kitchen',
    'Cable TV',
    'Washing machine',
    'Coffee machine',
    'Dishwasher',
  ],
  host: {
    'avatar_url': 'img/1.png',
    id: 3,
    'is_pro': true,
    name: 'Angelina',
  },
  id: 1,
  images: ['img/1.png', 'img/2.png'],
  'is_favorite': false,
  'is_premium': false,
  location: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8,
  },
  'max_adults': 4,
  'preview_image': 'img/1.png',
  price: 120,
  rating: 4.8,
  title: 'Beautiful & luxurious studio at great location',
  type: 'apartment',
};

const review = {
  comment:
    'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  date: '2019-05-08T14:13:56.569Z',
  id: 1,
  rating: 4,
  user: {
    'avatar_url': 'img/1.png',
    id: 4,
    'is_pro': false,
    name: 'Max',
  },
};

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

    apiMock.onGet(`${APIRoute.OFFERS}/23`).reply(200, [offer]);

    return offerLoader(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.SET_DATA_LOAD,
        payload: false,
      });

      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: ActionType.SET_DATA_LOAD,
        payload: true,
      });
    });
  });

  it('should make a correct API call to GET /offers', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offersLoader = fetchOffers();

    apiMock.onGet(APIRoute.OFFERS).reply(200, [offer]);

    return offersLoader(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(3);

      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.SET_DATA_LOAD,
        payload: false,
      });

      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: ActionType.LOAD_OFFERS,
        payload: [adaptOffer(offer)],
      });

      expect(dispatch).toHaveBeenNthCalledWith(3, {
        type: ActionType.SET_DATA_LOAD,
        payload: true,
      });
    });
  });

  it('should make a correct API call to GET /offers nearby', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offersNearbyLoader = fetchOffersNearby(23);

    apiMock
      .onGet(`${APIRoute.OFFERS}/23${APIRoute.OFFERS_NEARBY}`)
      .reply(200, [offer]);

    return offersNearbyLoader(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.LOAD_OFFERS_NEARBY,
        payload: [adaptOffer(offer)],
      });
    });
  });

  it('should make a correct API call to GET /reviews', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const reviewsLoader = fetchReviews(23);

    apiMock.onGet(`${APIRoute.REVIEWS}/23`).reply(200, [review]);

    return reviewsLoader(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
    });
  });

  it('should make a correct API call to GET /favorites', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoritesLoader = fetchFavorites();

    apiMock.onGet(APIRoute.FAVORITES).reply(200, [offer]);

    return favoritesLoader(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(3);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.SET_DATA_LOAD,
        payload: false,
      });

      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: ActionType.LOAD_FAVORITES,
        payload: [adaptOffer(offer)],
      });

      expect(dispatch).toHaveBeenNthCalledWith(3, {
        type: ActionType.SET_DATA_LOAD,
        payload: true,
      });
    });
  });

  it('should make a correct API call to POST /reviews', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const sendReviewAction = sendReview({
      comment: 'hello',
      rating: '5',
      id: 23,
    });

    apiMock.onPost(`${APIRoute.REVIEWS}/23`).reply(200, [review]);

    return sendReviewAction(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(7);

      expect(dispatch).toHaveBeenNthCalledWith(7, {
        type: ActionType.LOAD_REVIEWS,
        payload: [adaptReview(review)],
      });
    });
  });
});
