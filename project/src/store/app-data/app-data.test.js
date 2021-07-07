import { appData } from './app-data';
import { ActionType } from '../actions';

describe('Reducer: appData', () => {
  it('without additional parameters should return initial state', () => {
    expect(appData(undefined, {})).toEqual({
      offer: {},
      offers: [],
      offersNearby: [],
      reviews: [],
      favorites: [],
      isDataLoaded: false,
    });
  });

  it('should update offer by load offer', () => {
    const state = {
      offer: {},
      offers: [],
      offersNearby: [],
      reviews: [],
      favorites: [],
      isDataLoaded: false,
    };
    const loadOfferAction = {
      type: ActionType.LOAD_OFFER,
      payload: { offer: 'offer' },
    };

    expect(appData(state, loadOfferAction)).toEqual({
      offer: { offer: 'offer' },
      offers: [],
      offersNearby: [],
      reviews: [],
      favorites: [],
      isDataLoaded: false,
    });
  });

  it('should update offers by load offers', () => {
    const state = {
      offer: {},
      offers: [],
      offersNearby: [],
      reviews: [],
      favorites: [],
      isDataLoaded: false,
    };
    const loadOffersAction = {
      type: ActionType.LOAD_OFFERS,
      payload: [{ offer: 'offer' }, { offer1: 'offer1' }],
    };

    expect(appData(state, loadOffersAction)).toEqual({
      offer: {},
      offers: [{ offer: 'offer' }, { offer1: 'offer1' }],
      offersNearby: [],
      reviews: [],
      favorites: [],
      isDataLoaded: false,
    });
  });

  it('should update offers nearby by load offers nearby', () => {
    const state = {
      offer: {},
      offers: [],
      offersNearby: [],
      reviews: [],
      favorites: [],
      isDataLoaded: false,
    };
    const loadOffersNearbyAction = {
      type: ActionType.LOAD_OFFERS_NEARBY,
      payload: [{ offer: 'offer' }, { offer1: 'offer1' }],
    };

    expect(appData(state, loadOffersNearbyAction)).toEqual({
      offer: {},
      offers: [],
      offersNearby: [{ offer: 'offer' }, { offer1: 'offer1' }],
      reviews: [],
      favorites: [],
      isDataLoaded: false,
    });
  });

  it('should update reviews by load reviews', () => {
    const state = {
      offer: {},
      offers: [],
      offersNearby: [],
      reviews: [],
      favorites: [],
      isDataLoaded: false,
    };
    const loadReviewsAction = {
      type: ActionType.LOAD_REVIEWS,
      payload: [{ review: 'review' }, { review1: 'review1' }],
    };

    expect(appData(state, loadReviewsAction)).toEqual({
      offer: {},
      offers: [],
      offersNearby: [],
      reviews: [{ review: 'review' }, { review1: 'review1' }],
      favorites: [],
      isDataLoaded: false,
    });
  });

  it('should update favorites by load favorites', () => {
    const state = {
      offer: {},
      offers: [],
      offersNearby: [],
      reviews: [],
      favorites: [],
      isDataLoaded: false,
    };
    const loadFavoritesAction = {
      type: ActionType.LOAD_FAVORITES,
      payload: [{ offer: 'offer' }, { offer1: 'offer1' }],
    };

    expect(appData(state, loadFavoritesAction)).toEqual({
      offer: {},
      offers: [],
      offersNearby: [],
      reviews: [],
      favorites: [{ offer: 'offer' }, { offer1: 'offer1' }],
      isDataLoaded: false,
    });
  });

  it('should update is data loaded by is data loaded', () => {
    const state = {
      offer: {},
      offers: [],
      offersNearby: [],
      reviews: [],
      favorites: [],
      isDataLoaded: false,
    };
    const setDataLoadAction = {
      type: ActionType.SET_DATA_LOAD,
      payload: true,
    };

    expect(appData(state, setDataLoadAction)).toEqual({
      offer: {},
      offers: [],
      offersNearby: [],
      reviews: [],
      favorites: [],
      isDataLoaded: true,
    });
  });

  it('should update offer, offers, offers nearby, favorites by set favorites item', () => {
    const state = {
      offer: {
        id: 1,
        isFavorite: false,
      },
      offers: [
        {
          id: 1,
          isFavorite: false,
        },
        {
          id: 2,
          isFavorite: false,
        },
      ],
      offersNearby: [
        {
          id: 1,
          isFavorite: false,
        },
        {
          id: 2,
          isFavorite: false,
        },
      ],
      reviews: [],
      favorites: [
        {
          id: 1,
          isFavorite: false,
        },
        {
          id: 2,
          isFavorite: false,
        },
      ],
      isDataLoaded: false,
    };
    const setDataLoadAction = {
      type: ActionType.SET_FAVORITES_ITEM,
      payload: { id: 1, isFavorite: true },
    };

    expect(appData(state, setDataLoadAction)).toEqual({
      offer: {
        id: 1,
        isFavorite: true,
      },
      offers: [
        {
          id: 1,
          isFavorite: true,
        },
        {
          id: 2,
          isFavorite: false,
        },
      ],
      offersNearby: [
        {
          id: 1,
          isFavorite: true,
        },
        {
          id: 2,
          isFavorite: false,
        },
      ],
      reviews: [],
      favorites: [
        {
          id: 1,
          isFavorite: true,
        },
        {
          id: 2,
          isFavorite: false,
        },
      ],
      isDataLoaded: false,
    });
  });
});
