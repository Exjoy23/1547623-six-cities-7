import React from 'react';
import { render } from '@testing-library/react';

import Alert from './alert';

describe('Component: Alert', () => {
  it('should render correctly', () => {
    const { getByText } = render(<Alert text={'alert test'} />);
    expect(getByText(/alert test/i)).toBeInTheDocument();
  });
});
