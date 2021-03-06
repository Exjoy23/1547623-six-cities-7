import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Header from '../../header/header';
import FavoritesList from '../../favorites-list/favorites-list';
import EmptyFavoritesWrapper from '../../empty-favorites-wrapper/empty-favorites-wrapper';
import LoadWrapper from '../../load-wrapper/load-wrapper';
import Alert from '../../alert/alert';

import { fetchFavorites } from '../../../store/api-actions';

import {
  getFavorites,
  getIsDataError,
  getIsDataLoaded
} from '../../../store/app-data/selectors';
import { getIsOffline } from '../../../store/user-data/selectors';

import { AlertText, AppRoute } from '../../../const';

function FavoritesPage() {
  const dispatch = useDispatch();
  const favoritesOffers = useSelector(getFavorites);
  const isDataLoaded = useSelector(getIsDataLoaded);
  const isDataError = useSelector(getIsDataError);
  const isOffline = useSelector(getIsOffline);

  const uniqueCities = new Set();

  favoritesOffers.forEach((item) => uniqueCities.add(item.city.name));

  const favoritesCities = [...uniqueCities.values()];

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);

  return (
    <div className="page">
      <Header />
      {isOffline && <Alert text={AlertText.OFFLINE} />}
      {isDataError && <Alert text={AlertText.LOADING} />}
      <LoadWrapper isLoad={isDataLoaded}>
        <main
          className={
            favoritesOffers.length
              ? 'page__main page__main--favorites'
              : 'page__main page__main--favorites page__main--favorites-empty'
          }
        >
          <div className="page__favorites-container container">
            {(favoritesOffers.length && (
              <section className="favorites">
                <h1 className="favorites__title">Saved listing</h1>
                <FavoritesList
                  favoritesCities={favoritesCities}
                  favoritesOffers={favoritesOffers}
                />
              </section>
            )) || <EmptyFavoritesWrapper />}
          </div>
        </main>
      </LoadWrapper>
      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.MAIN}>
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width="64"
            height="33"
          />
        </Link>
      </footer>
    </div>
  );
}

export default FavoritesPage;
