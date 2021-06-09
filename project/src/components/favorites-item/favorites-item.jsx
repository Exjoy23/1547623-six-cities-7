import React from 'react';
import PropTypes from 'prop-types';

import CardItem from '../card-item/card-item';

import offersProp from '../app/offers.prop';

function FavoritesItem({ favoritesOffers, favoritesCity }) {
  const offers = favoritesOffers.filter(
    (item) => item.city.name === favoritesCity,
  );

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{favoritesCity}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((item) => (
          <CardItem key={item.id} offer={item} isFavoritesScreen />
        ))}
      </div>
    </li>
  );
}

FavoritesItem.propTypes = {
  favoritesOffers: PropTypes.arrayOf(offersProp).isRequired,
  favoritesCity: PropTypes.string.isRequired,
};

export default FavoritesItem;
