import React from 'react';

import { DateConfig } from '../../const';

import { getRatingInPercent } from '../../utils';

import reviewsProp from '../app/reviews.prop';

function ReviewItem({ review: { comment, date, rating, user } }) {
  const reviewRating = getRatingInPercent(rating);
  const reviewDate = new Date(date).toLocaleDateString(DateConfig.LOCALES, {
    year: DateConfig.YEAR,
    month: DateConfig.MONTH,
  });

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={user && user.avatarUrl}
            width="54"
            height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{user && user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: reviewRating }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={date}>
          {reviewDate}
        </time>
      </div>
    </li>
  );
}

ReviewItem.propTypes = {
  review: reviewsProp,
};

export default ReviewItem;
