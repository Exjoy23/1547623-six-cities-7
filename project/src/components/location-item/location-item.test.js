import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import LocationItem from './location-item';

let history = null;
let store = null;

describe('Component: LocationItem', () => {
  beforeEach(() => {
    history = createMemoryHistory();
    const createFakeStore = configureStore({});
    store = createFakeStore({ UI: { activeCity: 'Paris' } });
  });

  it('should render correctly', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Router history={history}>
          <LocationItem location={'Paris'} />
        </Router>
      </Provider>,
    );
    expect(getByText(/Paris/i)).toBeInTheDocument();
  });
});
