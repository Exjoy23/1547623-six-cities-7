import React, { memo } from 'react';
import PropTypes from 'prop-types';

import CardItem from '../card-item/card-item';

import { CardListType, MAIN_TYPE } from '../../const';

import offersProp from '../app/offers.prop';

function CardList({ offers, itemType = MAIN_TYPE }) {
  return (
    <div className={CardListType[itemType].LIST}>
      {offers.map((item) => (
        <CardItem key={item.id} offer={item} itemType={itemType} />
      ))}
    </div>
  );
}

CardList.propTypes = {
  offers: PropTypes.arrayOf(offersProp).isRequired,
  itemType: PropTypes.string,
};

export default memo(CardList);
