import React from 'react';

import RatingItem from '../rating-item/rating-item';

const RATINGS = [5, 4, 3, 2, 1];

function RatingList() {
  return RATINGS.map((item) => <RatingItem key={item} rating={item} />);
}

export default RatingList;
