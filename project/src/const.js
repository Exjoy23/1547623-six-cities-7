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
};
