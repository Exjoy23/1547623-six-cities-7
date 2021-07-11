import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { createMemoryHistory } from 'history';

import UserAuth from './user-auth';

import { AuthorizationStatus } from '../../const';

describe('Component: UserAuth', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const createFakeStore = configureStore({});
    const store = createFakeStore({
      USER: {
        authorizationStatus: AuthorizationStatus.AUTH,
        user: {
          avatarUrl: 'img/1.png',
          email: 'Oliver.conner@gmail.com',
          id: 1,
          isPro: false,
          name: 'Oliver.conner',
        },
      },
    });
    const { getByRole, getByText } = render(
      <Provider store={store}>
        <Router history={history}>
          <UserAuth />
        </Router>
      </Provider>,
    );
    expect(getByRole('img')).toBeInTheDocument();
    expect(getByText(/Sign out/i)).toBeInTheDocument();
  });
});
