export const AppRoute = {
  MAIN: '/',
  SIGN_IN: '/login',
  FAVORITES: '/favorites',
  ROOM: '/offer/:id',
};

export const CardType = {
  MAIN: {
    PLACE_CARD: 'cities__place-card place-card',
    IMAGE_WRAPPER: 'cities__image-wrapper place-card__image-wrapper',
    CARD_INFO: 'place-card__info',
    IMAGE: {
      WIDTH: 260,
      HEIGHT: 200,
    },
  },
  FAVORITES: {
    PLACE_CARD: 'favorites__card place-card',
    IMAGE_WRAPPER: 'favorites__image-wrapper place-card__image-wrapper',
    CARD_INFO: 'favorites__card-info place-card__info',
    IMAGE: {
      WIDTH: 150,
      HEIGHT: 110,
    },
  },
  NEARBY: {
    PLACE_CARD: 'near-places__card place-card',
    IMAGE_WRAPPER: 'near-places__image-wrapper place-card__image-wrapper',
    CARD_INFO: 'place-card__info',
    IMAGE: {
      WIDTH: 260,
      HEIGHT: 200,
    },
  },
};

export const CardListType = {
  MAIN: {
    LIST: 'cities__places-list places__list tabs__content',
  },
  NEARBY: {
    LIST: 'near-places__list places__list',
  },
};

export const URL_MARKER_DEFAULT = 'img/pin.svg';
export const URL_MARKER_CURRENT = 'img/pin-active.svg';

export const MAIN_TYPE = 'MAIN';
export const FAVORITES_TYPE = 'FAVORITES';
export const NEARBY_TYPE = 'NEARBY';

export const Locations = {
  PARIS: 'Paris',
  COLOGNE: 'Cologne',
  BRUSSELS: 'Brussels',
  AMSTERDAM: 'Amsterdam',
  HAMBURG: 'Hamburg',
  DUSSELDORF: 'Dusseldorf',
};

export const SORTS = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
];

export const SortOptions = {
  PRICE_LOW_FIRST: 'Price: low to high',
  PRISE_HIGH_FIRST: 'Price: high to low',
  TOP_RATED_FIRST: 'Top rated first',
};

export const DEFAULT_SORT = 'Popular';

export const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};

export const APIRoute = {
  OFFERS: '/hotels',
  OFFERS_NEARBY: '/nearby',
  REVIEWS: '/comments',
  LOGIN: '/login',
  LOGOUT: '/logout',
};
