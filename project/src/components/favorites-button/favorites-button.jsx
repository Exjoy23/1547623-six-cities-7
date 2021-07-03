import React from 'react';
import PropTypes from 'prop-types';

import { useFavorites } from '../../hooks/useFavorites';
import { FavoritesButtonType, MAIN_TYPE } from '../../const';

function FavoritesButton({ id, isFavorite, buttonType = MAIN_TYPE }) {
  const [isFavorites, setIsFavorites] = useFavorites(id, isFavorite);

  return (
    <button
      className={FavoritesButtonType[buttonType].BUTTON_CLASS}
      type="button"
      onClick={setIsFavorites}
    >
      <svg
        className={FavoritesButtonType[buttonType].IMAGE.CLASS}
        width={FavoritesButtonType[buttonType].IMAGE.WIDTH}
        height={FavoritesButtonType[buttonType].IMAGE.HEIGHT}
        style={{
          fill: `${isFavorites ? '#4481c3' : 'none'}`,
          stroke: `${isFavorites ? '#4481c3' : '#979797'}`,
        }}
      >
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

FavoritesButton.propTypes = {
  id: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  buttonType: PropTypes.string,
};

export default FavoritesButton;
