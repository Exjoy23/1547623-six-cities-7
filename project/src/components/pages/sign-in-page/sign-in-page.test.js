import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import SignInPage from './sign-in-page';

let history = null;
let store = null;

describe('Component: SignInPage', () => {
  beforeEach(() => {
    history = createMemoryHistory();
    const createFakeStore = configureStore({});
    store = createFakeStore({ USER: { authorizationStatus: 'NO_AUTH' } });
  });

  it('should render correctly', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Router history={history}>
          <SignInPage />
        </Router>
      </Provider>,
    );
    expect(getByText(/Amsterdam/i)).toBeInTheDocument();
  });
});
