import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Header from '../../header/header';
import LocationList from '../../location-list/location-list';
import MainPageWrapper from '../../main-page-wrapper/main-page-wrapper';

import { LOCATIONS } from '../../../const';

import offersProp from '../../app/offers.prop';

function MainPage({ offers, city, activeSort }) {
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
          {offers.length ? (
            <MainPageWrapper
              offers={offers}
              city={city}
              activeSort={activeSort}
            />
          ) : (
            <div className="cities__places-container cities__places-container--empty container">
              <section className="cities__no-places">
                <div className="cities__status-wrapper tabs__content">
                  <b className="cities__status">No places to stay available</b>
                  <p className="cities__status-description">
                    We could not find any property available at the moment in
                    Dusseldorf
                  </p>
                </div>
              </section>
              <div className="cities__right-section"></div>
            </div>
          )}
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
