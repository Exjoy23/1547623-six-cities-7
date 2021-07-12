import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import RatingItem from '../rating-item/rating-item';

import { getIsReviewSending } from '../../store/user-data/selectors';

import { RATINGS } from '../../const';

function RatingList({ handleChange, checked }) {
  const isReviewSending = useSelector(getIsReviewSending);

  return (
    <div className="reviews__rating-form form__rating" onChange={handleChange}>
      {RATINGS.map((item) => (
        <RatingItem
          key={item}
          rating={item}
          checked={checked}
          isDisabled={isReviewSending}
        />
      ))}
    </div>
  );
}

RatingList.propTypes = {
  handleChange: PropTypes.func.isRequired,
  checked: PropTypes.number.isRequired,
};

export default RatingList;
