import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { AppRoute } from '../../const';

import { changeCity } from '../../store/slices/ui-slice';

function LocationItem({ location }) {
  const { city } = useSelector(({ uiSlice }) => ({
    city: uiSlice.city,
  }));

  const dispatch = useDispatch();

  return (
    <li className="locations__item">
      <Link
        style={
          city === location
            ? { pointerEvents: 'none', userSelect: 'none' }
            : { userSelect: 'none' }
        }
        to={AppRoute.MAIN}
        onClick={() => {
          dispatch(changeCity(location));
        }}
        className={
          city === location
            ? 'locations__item-link tabs__item tabs__item--active'
            : 'locations__item-link tabs__item'
        }
      >
        <span>{location}</span>
      </Link>
    </li>
  );
}

LocationItem.propTypes = {
  location: PropTypes.string.isRequired,
};

export default memo(LocationItem);
