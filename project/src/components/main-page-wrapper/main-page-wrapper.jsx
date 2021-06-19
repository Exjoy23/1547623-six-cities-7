import React from 'react';
import PropTypes from 'prop-types';

import Map from '../map/map';
import CardList from '../card-list/card-list';
import SortForm from '../sort-form/sort-form';

import { SORTS } from '../../const';
import { sortOffers } from '../../utils';

import offersProp from '../app/offers.prop';

function MainPageWrapper({ offers, city, activeSort }) {
  const sortedOffers = sortOffers(activeSort, offers);

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">
          {offers.length} places to stay in {city}
        </b>
        <SortForm sorts={SORTS} />
        <CardList offers={sortedOffers} />
      </section>
      <div className="cities__right-section">
        <section className="cities__map map">
          <Map city={offers[0].city} offers={offers} />
        </section>
      </div>
    </div>
  );
}

MainPageWrapper.propTypes = {
  offers: PropTypes.arrayOf(offersProp).isRequired,
  city: PropTypes.string.isRequired,
  activeSort: PropTypes.string.isRequired,
};

export default MainPageWrapper;
