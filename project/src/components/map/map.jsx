import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import { connect } from 'react-redux';

import useMap from '../../hooks/useMap';

import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';

import offersProp from '../app/offers.prop';

import 'leaflet/dist/leaflet.css';

const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [30, 30],
  iconAnchor: [15, 30],
});

const currentCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [30, 30],
  iconAnchor: [15, 30],
});

function Map({ city, offers, activeCard }) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    const markers = leaflet.layerGroup();

    if (map) {
      markers.addTo(map);

      offers.forEach(({ location: { latitude, longitude }, id }) => {
        leaflet
          .marker(
            {
              lat: latitude,
              lng: longitude,
            },
            {
              icon: activeCard === id ? currentCustomIcon : defaultCustomIcon,
            },
          )
          .addTo(markers);
      });

      map.flyTo(
        [offers[0].city.location.latitude, offers[0].city.location.longitude],
        offers[0].city.location.zoom,
      );

      map.scrollWheelZoom.disable();
    }

    return () => {
      markers.clearLayers();
    };
  }, [map, offers, activeCard]);

  return <div style={{ height: '100%' }} ref={mapRef}></div>;
}

Map.propTypes = {
  offers: PropTypes.arrayOf(offersProp).isRequired,
  city: PropTypes.shape({
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  activeCard: PropTypes.number,
};

const mapStateToProps = ({ activeCard }) => ({ activeCard });

export default connect(mapStateToProps)(Map);
