import React from 'react';
import { useSelector } from 'react-redux';

import Header from '../../header/header';
import LocationList from '../../location-list/location-list';
import MainPageWrapper from '../../main-page-wrapper/main-page-wrapper';
import EmptyPageWrapper from '../../empty-page-wrapper/empty-page-wrapper';
import LoadWrapper from '../../load-wrapper/load-wrapper';

import { getActiveCity } from '../../../store/app-ui/selectors';
import { getOffers, getIsDataLoaded } from '../../../store/app-data/selectors';

import { Locations } from '../../../const';

function MainPage() {
  const city = useSelector(getActiveCity);
  const offers = useSelector(getOffers);
  const isDataLoaded = useSelector(getIsDataLoaded);

  const sortedOffers =
    offers && offers.filter((item) => item.city.name === city);

  return (
    <div className="page page--gray page--main">
      <Header />

      <main
        className={
          offers && offers.length
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
          <LoadWrapper isLoad={isDataLoaded}>
            {(sortedOffers && sortedOffers.length && (
              <MainPageWrapper offers={sortedOffers} city={city} />
            )) || <EmptyPageWrapper />}
          </LoadWrapper>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
