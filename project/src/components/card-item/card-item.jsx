import React from 'react';
import { generatePath, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { AppRoute, CardType } from '../../const';
import { getRatingInPercent } from '../../utils';

import offersProp from '../app/offers.prop';

const MAIN_TYPE = 'MAIN';

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
  setActiveCard = () => {},
  itemType = MAIN_TYPE,
}) {
  const cardRating = getRatingInPercent(rating);

  return (
    <article
      className={CardType[itemType].PLACE_CARD}
      onMouseEnter={() => setActiveCard(id)}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={CardType[itemType].IMAGE_WRAPPER}>
        <Link to={{ pathname: generatePath(AppRoute.ROOM, { id }), state: id }}>
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
          <button className="place-card__bookmark-button button" type="button">
            <svg
              className="place-card__bookmark-icon"
              width="18"
              height="19"
              style={{
                fill: `${isFavorite && '#4481c3'}`,
                stroke: `${isFavorite ? '#4481c3' : '#979797'}`,
              }}
            >
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
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
  setActiveCard: PropTypes.func,
  itemType: PropTypes.string,
};

export default CardItem;
