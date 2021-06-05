import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { AppRoute } from '../../const';

import MainPage from '../pages/main-page/main-page';
import SignInPage from '../pages/sign-in-page/sign-in-page';
import FavoritesPage from '../pages/favorites-page/favorites-page';
import RoomPage from '../pages/room-page/room-page';
import NotFoundPage from '../pages/not-found-page/not-found-page';

function App({ offersCount }) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <MainPage offersCount={offersCount} />
        </Route>
        <Route exact path={AppRoute.SIGN_IN} component={SignInPage} />
        <Route exact path={AppRoute.FAVORITES} component={FavoritesPage} />
        <Route exact path={AppRoute.ROOM} component={RoomPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  offersCount: PropTypes.number.isRequired,
};

export default App;
