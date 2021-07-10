import React from 'react';
import { render } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import RatingList from './rating-list';

let store = null;

describe('Component: RatingList', () => {
  beforeEach(() => {
    const createFakeStore = configureStore({});
    store = createFakeStore({ USER: { isReviewSending: false } });
  });

  it('should render correctly', () => {
    const { queryByText } = render(
      <Provider store={store}>
        <RatingList handleChange={() => {}} checked={5} />
      </Provider>,
    );
    expect(queryByText(/text/)).not.toBeInTheDocument();
  });
});
