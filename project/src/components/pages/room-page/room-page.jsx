import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getRatingInPercent } from '../../../utils';
import { NEARBY_TYPE, AuthorizationStatus } from '../../../const';
import {
  fetchReviewList,
  fetchOfferNearbyList,
  fetchOffer
} from '../../../store/api-actions';
import { ActionCreator } from '../../../store/action';

import Header from '../../header/header';
import Map from '../../map/map';
import ReviewList from '../../review-list/review-list';
import ReviewForm from '../../review-form/review-form';
import ImageList from '../../image-list/image-list';
import GoodsList from '../../goods-list/goods-list';
import CardList from '../../card-list/card-list';
import LoadingScreen from '../../loading-screen/loading-screen';
import NotFoundPage from '../not-found-page/not-found-page';

import offersProp from '../../app/offers.prop';
import reviewsProp from '../../app/reviews.prop';
import { connect } from 'react-redux';

function RoomPage({
  offers = [],
  offersNearby = [],
  reviews = [],
  loadReviewList,
  loadOffer,
  loadOfferNearbyList,
  authorizationStatus,
  setIsLoadOffers,
  isDataLoaded,
}) {
  const [isError, setIsError] = useState(false);
  const location = useLocation();

  const roomId = +location.pathname.replace(/\D+/g, '');

  const {
    images,
    isFavorite,
    isPremium,
    rating,
    title,
    type,
    description,
    bedrooms,
    maxAdults,
    price,
    goods,
    host,
  } = offers.length && offers[0];

  const cardRating = getRatingInPercent(rating);

  useEffect(() => {
    (async () => {
      try {
        await setIsLoadOffers(false);
        await loadOffer(roomId);
        setIsError(false);
      } catch (error) {
        setIsError(true);
      }
    })();

    loadReviewList(roomId);
    loadOfferNearbyList(roomId);
  }, [roomId, loadOffer, loadReviewList, loadOfferNearbyList, setIsLoadOffers]);

  if (isError) {
    return <NotFoundPage />;
  }

  if (!isDataLoaded) {
    return <LoadingScreen />;
  }

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <ImageList images={images} />
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium && (
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="property__name-wrapper">
                <h1 className="property__name">{title}</h1>
                <button
                  className="property__bookmark-button button"
                  type="button"
                >
                  <svg
                    className="property__bookmark-icon"
                    width="31"
                    height="33"
                    style={{
                      fill: `${isFavorite && '#4481c3'}`,
                      stroke: `${isFavorite ? '#4481c3' : '#979797'}`,
                    }}
                  >
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: cardRating }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">
                  {rating}
                </span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <GoodsList goods={goods} />
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img
                      className="property__avatar user__avatar"
                      src={host.avatarUrl}
                      width="74"
                      height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="property__user-name">{host.name}</span>
                  {host.isPro && (
                    <span className="property__user-status">Pro</span>
                  )}
                </div>
                <div className="property__description">
                  <p className="property__text">{description}</p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">
                  Reviews &middot;{' '}
                  <span className="reviews__amount">{reviews.length}</span>
                </h2>
                <ReviewList reviews={reviews} />
                {authorizationStatus === AuthorizationStatus.AUTH && (
                  <ReviewForm id={roomId} />
                )}
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map city={offers[0].city} offers={offers} />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <CardList offers={offersNearby} itemType={NEARBY_TYPE} />
          </section>
        </div>
      </main>
    </div>
  );
}

RoomPage.propTypes = {
  offers: PropTypes.arrayOf(offersProp).isRequired,
  offersNearby: PropTypes.arrayOf(offersProp).isRequired,
  reviews: PropTypes.arrayOf(reviewsProp).isRequired,
  loadReviewList: PropTypes.func.isRequired,
  loadOffer: PropTypes.func.isRequired,
  loadOfferNearbyList: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  setIsLoadOffers: PropTypes.func.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = ({
  offers,
  offersNearby,
  reviews,
  authorizationStatus,
  isDataLoaded,
}) => ({
  offers,
  offersNearby,
  reviews,
  authorizationStatus,
  isDataLoaded,
});

const mapDispatchToProps = {
  loadReviewList: fetchReviewList,
  loadOfferNearbyList: fetchOfferNearbyList,
  loadOffer: fetchOffer,
  setIsLoadOffers: ActionCreator.setIsLoadOffers,
};

export default connect(mapStateToProps, mapDispatchToProps)(RoomPage);
