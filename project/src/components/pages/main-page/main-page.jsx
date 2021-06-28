import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Header from '../../header/header';
import LocationList from '../../location-list/location-list';
import MainPageWrapper from '../../main-page-wrapper/main-page-wrapper';
import EmptyPageWrapper from '../../empty-page-wrapper/empty-page-wrapper';
import LoadingScreen from '../../loading-screen/loading-screen';
import LoadWrapper from '../../load-wrapper/load-wrapper';

import { fetchOfferList } from '../../../store/api-actions';
import { ActionCreator } from '../../../store/action';

import { Locations } from '../../../const';

import offersProp from '../../app/offers.prop';

function MainPage({
  offers,
  city,
  activeSort,
  loadOffers,
  isDataLoaded,
  setIsLoadOffers,
}) {
  useEffect(() => {
    setIsLoadOffers(false);
    loadOffers();
  }, [loadOffers, setIsLoadOffers]);

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
            <LocationList locations={Object.values(Locations)} />
          </section>
        </div>
        <div className="cities">
          <LoadWrapper isLoad={isDataLoaded} Spinner={LoadingScreen}>
            {(sortedOffers.length && (
              <MainPageWrapper
                offers={sortedOffers}
                city={city}
                activeSort={activeSort}
              />
            )) || <EmptyPageWrapper />}
          </LoadWrapper>
        </div>
      </main>
    </div>
  );
}

MainPage.propTypes = {
  offers: PropTypes.arrayOf(offersProp).isRequired,
  city: PropTypes.string.isRequired,
  activeSort: PropTypes.string.isRequired,
  loadOffers: PropTypes.func.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
  setIsLoadOffers: PropTypes.func.isRequired,
};

const mapStateToProps = ({ offers, city, activeSort, isDataLoaded }) => ({
  offers,
  city,
  activeSort,
  isDataLoaded,
});

const mapDispatchToProps = {
  loadOffers: fetchOfferList,
  setIsLoadOffers: ActionCreator.setIsLoadOffers,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
