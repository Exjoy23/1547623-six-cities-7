import React from 'react';
import { generatePath, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { AppRoute } from '../../const';
import { getRatingInPercent } from '../../utils';

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
  setActiveCard = () => {},
  isFavoritesScreen,
}) {
  const cardRating = getRatingInPercent(rating);

  return (
    <article
      className={
        isFavoritesScreen
          ? 'favorites__card place-card'
          : 'cities__place-card place-card'
      }
      onMouseEnter={() => setActiveCard(id)}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div
        className={
          isFavoritesScreen
            ? 'favorites__image-wrapper place-card__image-wrapper'
            : 'cities__image-wrapper place-card__image-wrapper'
        }
      >
        <Link to={{ pathname: generatePath(AppRoute.ROOM, { id }), state: id }}>
          <img
            className="place-card__image"
            src={previewImage}
            width={isFavoritesScreen ? '150' : '260'}
            height={isFavoritesScreen ? '110' : '200'}
            alt="Place image"
          />
        </Link>
      </div>
      <div
        className={
          isFavoritesScreen
            ? 'favorites__card-info place-card__info'
            : 'place-card__info'
        }
      >
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
  isFavoritesScreen: PropTypes.bool.isRequired,
};

export default CardItem;
