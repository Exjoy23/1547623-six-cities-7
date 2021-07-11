import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { createAPI } from '../../../services/api';

import MainPage from './main-page';

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

describe('Component: MainPage', () => {
  beforeEach(() => {
    api = createAPI(() => {});
    history = createMemoryHistory();
    const createFakeStore = configureStore([thunk.withExtraArgument(api)]);
    store = createFakeStore({
      UI: { activeCity: 'Paris' },
      DATA: { offers: [offer], isDataLoaded: true },
      USER: { authorizationStatus: 'AUTH' },
    });
  });

  it('should render correctly', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Router history={history}>
          <MainPage />
        </Router>
      </Provider>,
    );
    expect(getByText(/Paris/i)).toBeInTheDocument();
  });
});
