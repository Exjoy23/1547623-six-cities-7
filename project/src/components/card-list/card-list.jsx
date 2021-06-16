import React, { useState } from 'react';
import PropTypes from 'prop-types';

import CardItem from '../card-item/card-item';

import { CardListType, MAIN_TYPE } from '../../const';

import offersProp from '../app/offers.prop';

function CardList({ offers, itemType = MAIN_TYPE }) {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <div className={CardListType[itemType].LIST}>
      <div style={{ display: 'none' }}>{activeCard}</div>
      {offers.map((item) => (
        <CardItem
          key={item.id}
          offer={item}
          setActiveCard={itemType === MAIN_TYPE ? setActiveCard : () => {}}
        />
      ))}
    </div>
  );
}

CardList.propTypes = {
  offers: PropTypes.arrayOf(offersProp).isRequired,
  itemType: PropTypes.string,
};

export default CardList;
