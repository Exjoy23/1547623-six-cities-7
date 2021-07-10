import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import ReviewForm from './review-form';

import { AuthorizationStatus } from '../../const';

describe('Component: ReviewForm', () => {
  it('should render correctly', () => {
    const createFakeStore = configureStore({});
    const store = createFakeStore({
      USER: {
        authorizationStatus: AuthorizationStatus.AUTH,
        user: {},
        isReviewSending: false,
        isReviewSuccess: false,
        isReviewError: false,
      },
    });
    const { getByRole, getByText } = render(
      <Provider store={store}>
        <ReviewForm id={23} />
      </Provider>,
    );
    expect(getByRole('button')).toBeInTheDocument();
    expect(
      getByText(/To submit review please make sure to set/i),
    ).toBeInTheDocument();
    expect(getByText(/50 characters/i)).toBeInTheDocument();
  });
});
