import React from 'react';
import { render } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import FavoritesButton from './favorites-button';

let store = null;

describe('Component: FavoritesButton', () => {
  beforeEach(() => {
    const createFakeStore = configureStore({});
    store = createFakeStore({});
  });

  it('should render correctly', () => {
    const { getByRole } = render(
      <Provider store={store}>
        <FavoritesButton id={23} isFavorite={false} />
      </Provider>,
    );
    expect(getByRole('button')).toBeInTheDocument();
  });
});
