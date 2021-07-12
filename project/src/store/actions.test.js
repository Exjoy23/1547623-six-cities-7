import {
  ActionType,
  changeActiveCard,
  changeActiveCity,
  changeActiveSort,
  loadFavorites,
  loadOffer,
  loadOffers,
  loadOffersNearby,
  loadReviews,
  loadUserInfo,
  logout,
  redirectToRoute,
  requireAuthorization,
  setDataLoad,
  setFavoritesItem,
  setIsOffline,
  setIsReviewError,
  setIsReviewSending,
  setIsReviewSuccess
} from './actions';

describe('Actions', () => {
  it('action creator for load offer returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOAD_OFFER,
      payload: {
        offer: 'offer',
      },
    };

    expect(
      loadOffer({
        offer: 'offer',
      }),
    ).toEqual(expectedAction);
  });

  it('action creator for load offers returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOAD_OFFERS,
      payload: {
        offers: 'offers',
      },
    };

    expect(
      loadOffers({
        offers: 'offers',
      }),
    ).toEqual(expectedAction);
  });

  it('action creator for load offers nearby returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOAD_OFFERS_NEARBY,
      payload: {
        offers: 'offers',
      },
    };

    expect(
      loadOffersNearby({
        offers: 'offers',
      }),
    ).toEqual(expectedAction);
  });

  it('action creator for load reviews returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOAD_REVIEWS,
      payload: {
        reviews: 'reviews',
      },
    };

    expect(
      loadReviews({
        reviews: 'reviews',
      }),
    ).toEqual(expectedAction);
  });

  it('action creator for load favorites returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOAD_FAVORITES,
      payload: {
        favorites: 'favorites',
      },
    };

    expect(
      loadFavorites({
        favorites: 'favorites',
      }),
    ).toEqual(expectedAction);
  });

  it('action creator for set data load returns correct action', () => {
    const expectedAction = {
      type: ActionType.SET_DATA_LOAD,
      payload: true,
    };

    expect(setDataLoad(true)).toEqual(expectedAction);
  });

  it('action creator for require authorization returns correct action', () => {
    const expectedAction = {
      type: ActionType.REQUIRE_AUTHORIZATION,
      payload: 'AUTH',
    };

    expect(requireAuthorization('AUTH')).toEqual(expectedAction);
  });

  it('action creator for load user info returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOAD_USER_INFO,
      payload: {
        user: 'info',
      },
    };

    expect(
      loadUserInfo({
        user: 'info',
      }),
    ).toEqual(expectedAction);
  });

  it('action creator for logout returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOGOUT,
    };

    expect(logout()).toEqual(expectedAction);
  });

  it('action creator for set favorites item returns correct action', () => {
    const expectedAction = {
      type: ActionType.SET_FAVORITES_ITEM,
      payload: { id: 1, status: true },
    };

    expect(setFavoritesItem({ id: 1, status: true })).toEqual(expectedAction);
  });

  it('action creator for set is review sending returns correct action', () => {
    const expectedAction = {
      type: ActionType.SET_IS_REVIEW_SENDING,
      payload: true,
    };

    expect(setIsReviewSending(true)).toEqual(expectedAction);
  });

  it('action creator for set is review success returns correct action', () => {
    const expectedAction = {
      type: ActionType.SET_IS_REVIEW_SUCCESS,
      payload: true,
    };

    expect(setIsReviewSuccess(true)).toEqual(expectedAction);
  });

  it('action creator for set is review error returns correct action', () => {
    const expectedAction = {
      type: ActionType.SET_IS_REVIEW_ERROR,
      payload: false,
    };

    expect(setIsReviewError(false)).toEqual(expectedAction);
  });

  it('action creator for set is offline returns correct action', () => {
    const expectedAction = {
      type: ActionType.SET_IS_OFFLINE,
      payload: false,
    };

    expect(setIsOffline(false)).toEqual(expectedAction);
  });

  it('action creator for change active city returns correct action', () => {
    const expectedAction = {
      type: ActionType.CHANGE_ACTIVE_CITY,
      payload: 'Amsterdam',
    };

    expect(changeActiveCity('Amsterdam')).toEqual(expectedAction);
  });

  it('action creator for change active sort returns correct action', () => {
    const expectedAction = {
      type: ActionType.CHANGE_ACTIVE_SORT,
      payload: 'Popular',
    };

    expect(changeActiveSort('Popular')).toEqual(expectedAction);
  });

  it('action creator for change active card returns correct action', () => {
    const expectedAction = {
      type: ActionType.CHANGE_ACTIVE_CARD,
      payload: 23,
    };

    expect(changeActiveCard(23)).toEqual(expectedAction);
  });

  it('action creator for redirect to route returns correct action', () => {
    const expectedAction = {
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: '/login',
    };

    expect(redirectToRoute('/login')).toEqual(expectedAction);
  });
});
