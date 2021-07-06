import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import {
  FavoritesButtonType,
  MAIN_TYPE,
  IS_FAVORITES,
  IS_NOT_FAVORITES
} from '../../const';
import { setFavorites } from '../../store/api-actions';

function FavoritesButton({ id, isFavorite, buttonType = MAIN_TYPE }) {
  const dispatch = useDispatch();

  return (
    <button
      className={FavoritesButtonType[buttonType].BUTTON_CLASS}
      type="button"
      onClick={() => {
        dispatch(
          setFavorites({
            id,
            status: isFavorite ? IS_NOT_FAVORITES : IS_FAVORITES,
          }),
        );
      }}
    >
      <svg
        className={FavoritesButtonType[buttonType].IMAGE.CLASS}
        width={FavoritesButtonType[buttonType].IMAGE.WIDTH}
        height={FavoritesButtonType[buttonType].IMAGE.HEIGHT}
        style={{
          fill: `${isFavorite ? '#4481c3' : 'none'}`,
          stroke: `${isFavorite ? '#4481c3' : '#979797'}`,
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
