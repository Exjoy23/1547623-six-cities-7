import React from 'react';
import { render } from '@testing-library/react';

import ImageList from './image-list';

describe('Component: ImageList', () => {
  it('should render correctly', () => {
    const { getByRole } = render(<ImageList images={['string']} />);
    expect(getByRole('img')).toBeInTheDocument();
  });
});
