import React from 'react';
import { render } from '@testing-library/react';

import EmptyPageWrapper from './empty-page-wrapper';

describe('Component: EmptyPageWrapper', () => {
  it('should render correctly', () => {
    const { getByText } = render(<EmptyPageWrapper />);
    expect(
      getByText(
        /We could not find any property available at the moment in Dusseldorf/i,
      ),
    ).toBeInTheDocument();
  });
});
