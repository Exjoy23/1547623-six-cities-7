import React from 'react';
import { render } from '@testing-library/react';

import EmptyFavoritesWrapper from './empty-favorites-wrapper';

describe('Component: EmptyFavoritesWrapper', () => {
  it('should render correctly', () => {
    const { getByText } = render(<EmptyFavoritesWrapper />);
    expect(
      getByText(
        /Save properties to narrow down search or plan your future trips/i,
      ),
    ).toBeInTheDocument();
  });
});
