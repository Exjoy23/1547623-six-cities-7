import React from 'react';
import PropTypes from 'prop-types';

import ReviewItem from '../review-item/review-item';

import reviewsProp from '../app/reviews.prop';

function ReviewList({ reviews }) {
  return (
    <ul className="reviews__list">
      {reviews.map((item) => (
        <ReviewItem key={item.id} review={item} />
      ))}
    </ul>
  );
}

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(reviewsProp).isRequired,
};

export default ReviewList;
