import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { ActionCreator } from '../../store/action';

function LocationList({ locations, city, changeCity, fillOffersList }) {
  return (
    <ul className="locations__list tabs__list">
      {locations.map((item) => (
        <li key={item} className="locations__item">
          <a
            onClick={() => {
              changeCity(item);
              fillOffersList(item);
            }}
            className={
              city === item
                ? 'locations__item-link tabs__item tabs__item--active'
                : 'locations__item-link tabs__item'
            }
            href="#"
          >
            <span>{item}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

LocationList.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  city: PropTypes.string.isRequired,
  changeCity: PropTypes.func.isRequired,
  fillOffersList: PropTypes.func.isRequired,
};

const mapStateToProps = ({ city }) => ({
  city,
});

const mapDispatchToProps = {
  changeCity: ActionCreator.changeCity,
  fillOffersList: ActionCreator.fillOffersList,
};

export default connect(mapStateToProps, mapDispatchToProps)(LocationList);
