import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { AuthorizationStatus, AppRoute } from '../../const';

import App from './app';

let history = null;
let store = null;
let fakeApp = null;

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

const review = {
  comment:
    'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  rating: 4,
};

describe('Application Routing', () => {
  beforeAll(() => {
    history = createMemoryHistory();

    const createFakeStore = configureStore([thunk]);
    store = createFakeStore({
      USER: { authorizationStatus: AuthorizationStatus.NO_AUTH },
      DATA: {
        isDataLoaded: true,
        offer,
        reviews: [review],
        offersNearby: [offer],
      },
      UI: {
        activeCity: 'Paris',
        activeSort: 'Popular',
        activeCard: null,
      },
    });

    fakeApp = (
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    );
  });

  it('should render "MainPage" when user navigate to "/"', () => {
    history.push(AppRoute.MAIN);
    render(fakeApp);

    expect(screen.getByText(/places to stay/i)).toBeInTheDocument();
    expect(screen.getByText(/Paris/i)).toBeInTheDocument();
    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
  });

  it('should render "SignInPage" when user navigate to "/login"', () => {
    history.push(AppRoute.LOGIN);
    render(fakeApp);

    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
  });

  //   it('should render "RoomPage" when user navigate to "/room"', () => {
  //     history.push(AppRoute.ROOM);
  //     render(fakeApp);

  //     expect(screen.getByText(/What's inside/i)).toBeInTheDocument();
  //     expect(screen.getByText(/Meet the host/i)).toBeInTheDocument();
  //     expect(screen.getByText(/Reviews/i)).toBeInTheDocument();
  //     expect(
  //       screen.getByText(/Other places in the neighbourhood/i),
  //     ).toBeInTheDocument();
  //   });

  it('should render "NotFoundPage" when user navigate to "/room/200"', () => {
    history.push(`${AppRoute.ROOM}/200`);
    render(fakeApp);

    expect(screen.getByText(/404/i)).toBeInTheDocument();
    expect(screen.getByText(/Not found/i)).toBeInTheDocument();
  });

  //   it('should render "FavoritesPage" when user navigate to "/room/200"', () => {
  //     history = createMemoryHistory();

  //     const createFakeStore = configureStore([thunk]);
  //     store = createFakeStore({
  //       USER: { authorizationStatus: AuthorizationStatus.AUTH },
  //       DATA: {
  //         isDataLoaded: true,
  //         favorites: [],
  //       },
  //       UI: {
  //         activeCity: 'Paris',
  //         activeSort: 'Popular',
  //         activeCard: null,
  //       },
  //     });

  //     fakeApp = (
  //       <Provider store={store}>
  //         <Router history={history}>
  //           <App />
  //         </Router>
  //       </Provider>
  //     );

  //     history.push(AppRoute.FAVORITES);
  //     render(fakeApp);

  //     expect(screen.getByText(/Nothing yet saved/i)).toBeInTheDocument();
  //     expect(
  //       screen.getByText(
  //         /Save properties to narrow down search or plan your future trips/i,
  //       ),
  //     ).toBeInTheDocument();
  //   });
});
