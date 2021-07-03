import React from 'react';
import { generatePath, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { AppRoute, CardType, MAIN_TYPE } from '../../const';
import { getRatingInPercent } from '../../utils';

import FavoritesButton from '../favorites-button/favorites-button';

import offersProp from '../app/offers.prop';

function CardItem({
  offer: {
    id,
    price,
    rating,
    isFavorite,
    isPremium,
    title,
    type,
    previewImage,
  },
  itemType = MAIN_TYPE,
  onMouseEnter,
  onMouseLeave,
}) {
  const cardRating = getRatingInPercent(rating);

  return (
    <article
      className={CardType[itemType].PLACE_CARD}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={CardType[itemType].IMAGE_WRAPPER}>
        <Link to={{ pathname: generatePath(AppRoute.ROOM, { id }) }}>
          <img
            className="place-card__image"
            src={previewImage}
            width={CardType[itemType].IMAGE.WIDTH}
            height={CardType[itemType].IMAGE.HEIGHT}
            alt="Place"
          />
        </Link>
      </div>
      <div className={CardType[itemType].CARD_INFO}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <FavoritesButton id={id} isFavorite={isFavorite} />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: cardRating }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link
            to={{ pathname: generatePath(AppRoute.ROOM, { id }), state: id }}
          >
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

CardItem.propTypes = {
  offer: offersProp,
  itemType: PropTypes.string,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
};

export default CardItem;
