const MAX_RATING = 5;
const MAX_PERCENT = 100;

const getRatingInPercent = (rating) =>
  `${((rating / MAX_RATING) * MAX_PERCENT).toFixed()}%`;

export { getRatingInPercent };
