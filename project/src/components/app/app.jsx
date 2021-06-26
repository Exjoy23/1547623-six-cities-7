import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { AppRoute } from '../../const';
// import { isCheckedAuth } from '../../utils';

import PrivateRoute from '../private-route/private-route';

import MainPage from '../pages/main-page/main-page';
import SignInPage from '../pages/sign-in-page/sign-in-page';
import FavoritesPage from '../pages/favorites-page/favorites-page';
import RoomPage from '../pages/room-page/room-page';
import NotFoundPage from '../pages/not-found-page/not-found-page';
import LoadingScreen from '../loading-screen/loading-screen';

function App({ authorizationStatus, isDataLoaded }) {
  if (!isDataLoaded) {
    return <LoadingScreen />;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN} component={MainPage} />
        <Route exact path={AppRoute.SIGN_IN} component={SignInPage} />
        <PrivateRoute
          exact
          path={AppRoute.FAVORITES}
          render={() => <FavoritesPage />}
        />
        <Route exact path={AppRoute.ROOM} component={RoomPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ authorizationStatus, isDataLoaded }) => ({
  authorizationStatus,
  isDataLoaded,
});

export default connect(mapStateToProps)(App);

// isCheckedAuth(authorizationStatus) ||
