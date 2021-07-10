import React from 'react';
import { render } from '@testing-library/react';

import GoodsList from './goods-list';

describe('Component: GoodsList', () => {
  it('should render correctly', () => {
    const { getByRole } = render(<GoodsList goods={[]} />);
    expect(getByRole('list')).toBeInTheDocument();
  });
});
