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

export const FavoritesButtonType = {
  MAIN: {
    BUTTON_CLASS: 'place-card__bookmark-button button',
    IMAGE: {
      CLASS: 'place-card__bookmark-icon',
      WIDTH: '18',
      HEIGHT: '19',
    },
  },
  FAVORITES: {
    BUTTON_CLASS: 'property__bookmark-button button',
    IMAGE: {
      CLASS: 'property__bookmark-icon',
      WIDTH: '31',
      HEIGHT: '33',
    },
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
  FAVORITES: '/favorite',
};

export const AlertText = {
  DEFAULT: 'Something went wrong. Please try again later!',
  OFFLINE: 'Connection lost',
  LOADING: 'Loading failure. Please try again later.',
};

export const TOKEN = 'token';
export const IS_FAVORITES = 1;
export const IS_NOT_FAVORITES = 0;

export const DEFAULT_TIMER = 5000;

export const RATINGS = [5, 4, 3, 2, 1];

export const DateConfig = {
  LOCALES: 'en-US',
  YEAR: 'numeric',
  MONTH: 'short',
};

export const MapConfig = {
  TILE_LAYER:
    'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  ATTRIBUTION:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
};

export const REMOVE_FAVORITES_COUNT = 1;

export const OFFLINE_TITLE = ' [offline]';
