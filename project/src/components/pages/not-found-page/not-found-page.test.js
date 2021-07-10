import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import NotFoundPage from './not-found-page';

let history = null;
let store = null;

describe('Component: NotFoundPage', () => {
  beforeEach(() => {
    history = createMemoryHistory();
    const createFakeStore = configureStore({});
    store = createFakeStore({ USER: { authorizationStatus: 'AUTH' } });
  });

  it('should render correctly', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Router history={history}>
          <NotFoundPage />
        </Router>
      </Provider>,
    );
    expect(getByText(/sign out/i)).toBeInTheDocument();
  });
});
