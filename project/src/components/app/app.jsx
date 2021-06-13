import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { AppRoute } from '../../const';

import MainPage from '../pages/main-page/main-page';
import SignInPage from '../pages/sign-in-page/sign-in-page';
import FavoritesPage from '../pages/favorites-page/favorites-page';
import RoomPage from '../pages/room-page/room-page';
import NotFoundPage from '../pages/not-found-page/not-found-page';

import offersProp from './offers.prop';
import reviewsProp from './reviews.prop';

function App({ offers, reviews }) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <MainPage offers={offers} />
        </Route>
        <Route exact path={AppRoute.SIGN_IN} component={SignInPage} />
        <Route exact path={AppRoute.FAVORITES}>
          <FavoritesPage offers={offers} />
        </Route>
        <Route exact path={AppRoute.ROOM}>
          <RoomPage offers={offers} reviews={reviews} />
        </Route>
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  offers: PropTypes.arrayOf(offersProp).isRequired,
  reviews: PropTypes.arrayOf(reviewsProp).isRequired,
};

export default App;
