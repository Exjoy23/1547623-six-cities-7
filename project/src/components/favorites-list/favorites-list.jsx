import React from 'react';
import PropTypes from 'prop-types';

import FavoritesItem from '../favorites-item/favorites-item';

import offersProp from '../app/offers.prop';

function FavoritesList({ favoritesCities, favoritesOffers }) {
  return (
    <ul className="favorites__list">
      {favoritesCities.map((item) => (
        <FavoritesItem
          key={item}
          favoritesOffers={favoritesOffers}
          favoritesCity={item}
        />
      ))}
    </ul>
  );
}

FavoritesList.propTypes = {
  favoritesOffers: PropTypes.arrayOf(offersProp).isRequired,
  favoritesCities: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default FavoritesList;
