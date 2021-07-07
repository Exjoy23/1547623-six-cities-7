import { AuthorizationStatus, SortOptions } from './const';

const RATING_STAR = 20;

export const getRatingInPercent = (rating) =>
  `${Math.round(rating) * RATING_STAR}%`;

export const sortOffers = (sort, offers) => {
  switch (sort) {
    case SortOptions.PRICE_LOW_FIRST:
      return offers.slice().sort((a, b) => a.price - b.price);
    case SortOptions.PRISE_HIGH_FIRST:
      return offers.slice().sort((a, b) => b.price - a.price);
    case SortOptions.TOP_RATED_FIRST:
      return offers.slice().sort((a, b) => b.rating - a.rating);
    default:
      return offers;
  }
};

export const isCheckedAuth = (authorizationStatus) =>
  authorizationStatus === AuthorizationStatus.UNKNOWN;
