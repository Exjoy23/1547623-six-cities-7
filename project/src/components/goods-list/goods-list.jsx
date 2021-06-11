import React from 'react';
import PropTypes from 'prop-types';

function GoodsList({ goods }) {
  return goods.map((item) => (
    <li key={item} className="property__inside-item">
      {item}
    </li>
  ));
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default GoodsList;
