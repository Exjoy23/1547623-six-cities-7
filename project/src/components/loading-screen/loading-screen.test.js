import React from 'react';
import { render } from '@testing-library/react';

import LoadingScreen from './loading-screen';

describe('Component: LoadingScreen', () => {
  it('should render correctly', () => {
    const { queryByText } = render(<LoadingScreen />);
    expect(queryByText(/text/i)).not.toBeInTheDocument();
  });
});
