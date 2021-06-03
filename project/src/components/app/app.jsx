import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { AppRoute } from '../../const';

import Main from '../main/main';
import SignIn from '../sign-in/sign-in';
import Favorites from '../favorites/favorites';
import Room from '../room/room';
import NotFound from '../not-found/not-found';

function App({ offersCount }) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <Main offersCount={offersCount} />
        </Route>
        <Route exact path={AppRoute.SIGN_IN} component={SignIn} />
        <Route exact path={AppRoute.FAVORITES} component={Favorites} />
        <Route exact path={AppRoute.ROOM} component={Room} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  offersCount: PropTypes.number.isRequired,
};

export default App;
