import React from 'react';
import { render } from '@testing-library/react';

import RatingItem from './rating-item';

describe('Component: RatingItem', () => {
  it('should render correctly', () => {
    const { getByRole } = render(
      <RatingItem rating={5} checked={5} isDisabled={false} />,
    );
    expect(getByRole('radio')).toBeInTheDocument();
  });
});
