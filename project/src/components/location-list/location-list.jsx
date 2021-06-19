import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { ActionCreator } from '../../store/action';
import { AppRoute } from '../../const';

function LocationList({ locations, city, changeCity }) {
  return (
    <ul className="locations__list tabs__list">
      {locations.map((item) => (
        <li key={item} className="locations__item">
          <Link
            style={
              city === item
                ? { pointerEvents: 'none', userSelect: 'none' }
                : { userSelect: 'none' }
            }
            to={AppRoute.MAIN}
            onClick={() => {
              changeCity(item);
            }}
            className={
              city === item
                ? 'locations__item-link tabs__item tabs__item--active'
                : 'locations__item-link tabs__item'
            }
          >
            <span>{item}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

LocationList.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  city: PropTypes.string.isRequired,
  changeCity: PropTypes.func.isRequired,
};

const mapStateToProps = ({ city }) => ({
  city,
});

const mapDispatchToProps = {
  changeCity: ActionCreator.changeCity,
};

export default connect(mapStateToProps, mapDispatchToProps)(LocationList);
