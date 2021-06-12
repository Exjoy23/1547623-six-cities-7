import React from 'react';
import PropTypes from 'prop-types';

function GoodsList({ goods }) {
  return (
    <ul className="property__inside-list">
      {goods.map((item) => (
        <li key={item} className="property__inside-item">
          {item}
        </li>
      ))}
    </ul>
  );
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default GoodsList;
