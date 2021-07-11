import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import {
  FavoritesButtonType,
  MAIN_TYPE,
  IS_FAVORITES,
  IS_NOT_FAVORITES
} from '../../const';
import { setFavorites } from '../../store/api-actions';

import Alert from '../alert/alert';

import { getIsFavoritesError } from '../../store/user-data/selectors';

function FavoritesButton({ id, isFavorite, buttonType = MAIN_TYPE }) {
  const isFavoritesError = useSelector(getIsFavoritesError);

  const dispatch = useDispatch();

  return (
    <>
      {isFavoritesError && <Alert />}
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
    </>
  );
}

FavoritesButton.propTypes = {
  id: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  buttonType: PropTypes.string,
};

export default FavoritesButton;
