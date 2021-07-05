import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { AppRoute, AuthorizationStatus } from '../../const';

import PrivateRoute from '../private-route/private-route';

import MainPage from '../pages/main-page/main-page';
import SignInPage from '../pages/sign-in-page/sign-in-page';
import FavoritesPage from '../pages/favorites-page/favorites-page';
import RoomPage from '../pages/room-page/room-page';
import NotFoundPage from '../pages/not-found-page/not-found-page';

function App() {
  return (
    <Switch>
      <Route exact path={AppRoute.MAIN} component={MainPage} />
      <PrivateRoute
        exact
        path={AppRoute.SIGN_IN}
        status={AuthorizationStatus.NO_AUTH}
        redirect={AppRoute.MAIN}
        render={() => <SignInPage />}
      />
      <PrivateRoute
        exact
        path={AppRoute.FAVORITES}
        render={() => <FavoritesPage />}
      />
      <Route exact path={AppRoute.ROOM} component={RoomPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
}

export default App;
