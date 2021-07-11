import React from 'react';
import { render } from '@testing-library/react';

import LoadWrapper from './load-wrapper';

describe('Component: LoadWrapper', () => {
  it('should render correctly', () => {
    const { getByText } = render(<LoadWrapper isLoad>child</LoadWrapper>);
    expect(getByText(/child/i)).toBeInTheDocument();
  });
});
