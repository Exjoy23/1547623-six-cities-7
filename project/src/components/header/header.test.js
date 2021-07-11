import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import Header from './header';

let history = null;
let store = null;

describe('Component: Header', () => {
  beforeEach(() => {
    history = createMemoryHistory();
    const createFakeStore = configureStore({});
    store = createFakeStore({
      USER: { authorizationStatus: 'AUTH' },
    });
  });

  it('should render correctly', () => {
    const { getByRole } = render(
      <Provider store={store}>
        <Router history={history}>
          <Header />
        </Router>
      </Provider>,
    );
    expect(getByRole('list')).toBeInTheDocument();
  });
});
