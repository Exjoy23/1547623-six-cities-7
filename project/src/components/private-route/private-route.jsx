import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { AppRoute, AuthorizationStatus } from '../../const';
import LoadWrapper from '../load-wrapper/load-wrapper';

import { getAuthorizationStatus } from '../../store/user-data/selectors';

function PrivateRoute({ render, path, exact }) {
  const authorizationStatus = useSelector(getAuthorizationStatus);

  return (
    <LoadWrapper isLoad={authorizationStatus !== AuthorizationStatus.UNKNOWN}>
      <Route
        path={path}
        exact={exact}
        render={(routeProps) =>
          authorizationStatus === AuthorizationStatus.AUTH ? (
            render(routeProps)
          ) : (
            <Redirect to={AppRoute.SIGN_IN} />
          )}
      />
    </LoadWrapper>
  );
}

PrivateRoute.propTypes = {
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

export default PrivateRoute;
