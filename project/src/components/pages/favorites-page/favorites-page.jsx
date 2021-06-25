import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Header from '../../header/header';
import FavoritesList from '../../favorites-list/favorites-list';
import EmptyFavoritesWrapper from '../../empty-favorites-wrapper/empty-favorites-wrapper';

import offersProp from '../../app/offers.prop';

function FavoritesPage({ offers }) {
  const favoritesOffers = offers.filter((item) => item.isFavorite);
  const uniqueCities = new Set();

  favoritesOffers.forEach((item) => uniqueCities.add(item.city.name));

  const favoritesCities = [...uniqueCities.values()];

  return (
    <div className="page">
      <Header />

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
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width="64"
            height="33"
          />
        </a>
      </footer>
    </div>
  );
}

FavoritesPage.propTypes = {
  offers: PropTypes.arrayOf(offersProp).isRequired,
};

const mapStateToProps = ({ offers }) => ({
  offers,
});

export default connect(mapStateToProps)(FavoritesPage);
