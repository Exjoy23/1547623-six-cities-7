import React from 'react';
import { render } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import Map from './map';

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

let store = null;

describe('Component: Map', () => {
  beforeEach(() => {
    const createFakeStore = configureStore({});
    store = createFakeStore({ UI: { activeCard: 1 } });
  });

  it('should render correctly', () => {
    const { queryByText } = render(
      <Provider store={store}>
        <Map city={offer.city} offers={[offer]} />
      </Provider>,
    );
    expect(queryByText(/text/i)).not.toBeInTheDocument();
  });
});
