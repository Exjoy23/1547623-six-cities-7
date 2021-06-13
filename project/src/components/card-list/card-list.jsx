import React, { useState } from 'react';
import PropTypes from 'prop-types';

import CardItem from '../card-item/card-item';

import offersProp from '../app/offers.prop';

function CardList({ offers }) {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <div className="cities__places-list places__list tabs__content">
      <div style={{ display: 'none' }}>{activeCard}</div>
      {offers.map((item) => (
        <CardItem key={item.id} offer={item} setActiveCard={setActiveCard} />
      ))}
    </div>
  );
}

CardList.propTypes = {
  offers: PropTypes.arrayOf(offersProp).isRequired,
};

export default CardList;
