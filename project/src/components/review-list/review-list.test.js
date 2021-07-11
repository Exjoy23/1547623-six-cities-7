import React from 'react';
import { render } from '@testing-library/react';

import ReviewList from './review-list';

const reviews = [
  {
    comment:
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: '2019-05-08T14:13:56.569Z',
    id: 1,
    rating: 4,
    user: {
      avatarUrl: 'img/1.png',
      id: 4,
      isPro: false,
      name: 'Max',
    },
  },
  {
    comment: 'A river by the unique lightness of Amsterdam.',
    date: '2019-05-08T14:13:56.569Z',
    id: 2,
    rating: 4,
    user: {
      avatarUrl: 'img/1.png',
      id: 4,
      isPro: false,
      name: 'Max',
    },
  },
];

describe('Component: ReviewList', () => {
  it('should render correctly', () => {
    const { getByRole, getByText } = render(<ReviewList reviews={reviews} />);
    expect(getByRole('list')).toBeInTheDocument();
    expect(
      getByText(
        /A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam/i,
      ),
    ).toBeInTheDocument();
  });
});
