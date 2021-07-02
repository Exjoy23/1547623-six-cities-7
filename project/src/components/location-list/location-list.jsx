import React from 'react';
import PropTypes from 'prop-types';

import LocationItem from '../location-item/location-item';

function LocationList({ locations }) {
  return (
    <ul className="locations__list tabs__list">
      {locations.map((item) => (
        <LocationItem key={item} location={item} />
      ))}
    </ul>
  );
}

LocationList.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default LocationList;
