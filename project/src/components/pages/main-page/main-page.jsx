import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Header from '../../header/header';
import LocationList from '../../location-list/location-list';
import MainPageWrapper from '../../main-page-wrapper/main-page-wrapper';
import EmptyPageWrapper from '../../empty-page-wrapper/empty-page-wrapper';

import { LOCATIONS } from '../../../const';

import offersProp from '../../app/offers.prop';

function MainPage({ offers, city, activeSort }) {
  const sortedOffers = offers.filter((item) => item.city.name === city);

  return (
    <div className="page page--gray page--main">
      <Header />

      <main
        className={
          offers.length
            ? 'page__main page__main--index'
            : 'page__main page__main--index page__main--index-empty'
        }
      >
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationList locations={LOCATIONS} />
          </section>
        </div>
        <div className="cities">
          {(sortedOffers.length && (
            <MainPageWrapper
              offers={sortedOffers}
              city={city}
              activeSort={activeSort}
            />
          )) || <EmptyPageWrapper />}
        </div>
      </main>
    </div>
  );
}

MainPage.propTypes = {
  offers: PropTypes.arrayOf(offersProp).isRequired,
  city: PropTypes.string.isRequired,
  activeSort: PropTypes.string.isRequired,
};

const mapStateToProps = ({ offers, city, activeSort }) => ({
  offers,
  city,
  activeSort,
});

export default connect(mapStateToProps)(MainPage);
