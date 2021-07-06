import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getRatingInPercent } from '../../../utils';
import {
  NEARBY_TYPE,
  AuthorizationStatus,
  FAVORITES_TYPE,
} from '../../../const';

import { fetchOffer } from '../../../store/api-actions';
import { fetchOffersNearby } from '../../../store/api-actions';
import { fetchReviews } from '../../../store/api-actions';
import { changeActiveCard } from '../../../store/actions';

import {
  getIsDataLoaded,
  getOffer,
  getOffersNearby,
  getReviews,
} from '../../../store/app-data/selectors';
import { getAuthorizationStatus } from '../../../store/user-data/selectors';

import Header from '../../header/header';
import Map from '../../map/map';
import ReviewList from '../../review-list/review-list';
import ReviewForm from '../../review-form/review-form';
import ImageList from '../../image-list/image-list';
import GoodsList from '../../goods-list/goods-list';
import CardList from '../../card-list/card-list';
import NotFoundPage from '../not-found-page/not-found-page';
import LoadWrapper from '../../load-wrapper/load-wrapper';
import FavoritesButton from '../../favorites-button/favorites-button';

function RoomPage() {
  const dispatch = useDispatch();
  const params = useParams();
  const offer = useSelector(getOffer);
  const offersNearby = useSelector(getOffersNearby);
  const isDataLoaded = useSelector(getIsDataLoaded);
  const reviews = useSelector(getReviews);
  const authorizationStatus = useSelector(getAuthorizationStatus);

  const sortedReviews = reviews
    .slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 10);

  const roomId = +params.id;

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
  } = offer;

  const cardRating = getRatingInPercent(rating);

  useEffect(() => {
    dispatch(changeActiveCard(roomId));
    dispatch(fetchOffer(roomId));
    dispatch(fetchReviews(roomId));
    dispatch(fetchOffersNearby(roomId));
  }, [roomId, dispatch]);

  return (
    <LoadWrapper isLoad={isDataLoaded}>
      {(Object.keys(offer).length && (
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
                    <FavoritesButton
                      id={roomId}
                      isFavorite={isFavorite}
                      buttonType={FAVORITES_TYPE}
                    />
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
                    <h2 className="property__inside-title">
                      What&apos;s inside
                    </h2>
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
                    <ReviewList reviews={sortedReviews} />
                    {authorizationStatus === AuthorizationStatus.AUTH && (
                      <ReviewForm id={roomId} />
                    )}
                  </section>
                </div>
              </div>
              <section className="property__map map">
                <Map city={offer.city} offers={[offer, ...offersNearby]} />
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
      )) || <NotFoundPage />}
    </LoadWrapper>
  );
}

export default RoomPage;
