import { SortOptions } from './const';

const MAX_RATING = 5;
const MAX_PERCENT = 100;

export const getRatingInPercent = (rating) =>
  `${((rating / MAX_RATING) * MAX_PERCENT).toFixed()}%`;

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
