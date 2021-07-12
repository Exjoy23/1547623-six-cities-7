import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { createAPI } from '../../../services/api';

import RoomPage from './room-page';

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
    avatarUrl: 'img/1.png',
    id: 3,
    isPro: true,
    name: 'Angelina',
  },
  id: 1,
  images: ['img/1.png', 'img/2.png'],
  isFavorite: false,
  isPremium: false,
  location: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8,
  },
  maxAdults: 4,
  previewImage: 'img/1.png',
  price: 120,
  rating: 4.8,
  title: 'Beautiful & luxurious studio at great location',
  type: 'apartment',
};

let history = null;
let store = null;
let api = null;

describe('Component: RoomPage', () => {
  beforeEach(() => {
    api = createAPI(() => {});
    history = createMemoryHistory();
    const createFakeStore = configureStore([thunk.withExtraArgument(api)]);
    store = createFakeStore({
      UI: { activeCity: 'Paris' },
      DATA: {
        offer: offer,
        offersNearby: [offer],
        reviews: [],
        isDataLoaded: true,
      },
      USER: { authorizationStatus: 'AUTH', isReviewSending: false },
    });
  });

  it('should render correctly', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Router history={history}>
          <RoomPage />
        </Router>
      </Provider>,
    );
    expect(getByText(/4.8/i)).toBeInTheDocument();
  });
});
