import React from 'react';
import PropTypes from 'prop-types';

import CardItem from '../card-item/card-item';

function CardList({ offersCount }) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {Array(offersCount)
        .fill(null)
        .map((item) => (
          <CardItem key={item} />
        ))}
    </div>
  );
}

CardList.propTypes = {
  offersCount: PropTypes.number.isRequired,
};

export default CardList;
