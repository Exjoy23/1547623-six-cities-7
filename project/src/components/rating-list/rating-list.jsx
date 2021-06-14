import React from 'react';
import PropTypes from 'prop-types';

import RatingItem from '../rating-item/rating-item';

const RATINGS = [5, 4, 3, 2, 1];

function RatingList({ handleChange }) {
  return (
    <div className="reviews__rating-form form__rating" onChange={handleChange}>
      {RATINGS.map((item) => (
        <RatingItem key={item} rating={item} />
      ))}
    </div>
  );
}

RatingList.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default RatingList;
