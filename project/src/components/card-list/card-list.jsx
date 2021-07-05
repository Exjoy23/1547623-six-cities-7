import React, { memo } from 'react';
import PropTypes from 'prop-types';

import CardItem from '../card-item/card-item';

import { CardListType, MAIN_TYPE } from '../../const';

import offersProp from '../app/offers.prop';

function CardList({
  offers,
  itemType = MAIN_TYPE,
  onMouseEnter = () => {},
  onMouseLeave = () => {},
}) {
  return (
    <div className={CardListType[itemType].LIST}>
      {offers.map((item) => (
        <CardItem
          key={item.id}
          offer={item}
          itemType={itemType}
          onMouseEnter={() => onMouseEnter(item.id)}
          onMouseLeave={() => onMouseLeave(null)}
        />
      ))}
    </div>
  );
}

CardList.propTypes = {
  offers: PropTypes.arrayOf(offersProp).isRequired,
  itemType: PropTypes.string,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
};

export default memo(CardList);
