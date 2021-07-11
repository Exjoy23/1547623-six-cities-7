import React from 'react';
import { render } from '@testing-library/react';

import SortForm from './sort-form';

describe('Component: SortForm', () => {
  it('should render correctly', () => {
    const { getByText } = render(
      <SortForm sorts={[]} activeSort={'Popular'} />,
    );
    expect(getByText(/Sort by/i)).toBeInTheDocument();
  });
});
