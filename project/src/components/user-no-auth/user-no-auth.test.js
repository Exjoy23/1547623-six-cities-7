import React from 'react';
import { Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';

import UserNoAuth from './user-no-auth';

describe('Component: UserNoAuth', () => {
  const history = createMemoryHistory();
  it('should render correctly', () => {
    const { getByText } = render(
      <Router history={history}>
        <UserNoAuth />
      </Router>,
    );
    expect(getByText(/Sign in/i)).toBeInTheDocument();
  });
});
