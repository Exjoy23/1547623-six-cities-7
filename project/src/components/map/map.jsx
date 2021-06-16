import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';

import useMap from '../../hooks/useMap';

import { URL_MARKER_DEFAULT } from '../../const';

import offersProp from '../app/offers.prop';

import 'leaflet/dist/leaflet.css';

const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [30, 30],
  iconAnchor: [15, 30],
});

// const currentCustomIcon = leaflet.icon({
//   iconUrl: URL_MARKER_CURRENT,
//   iconSize: [30, 30],
//   iconAnchor: [15, 30],
// });

function Map({ city, offers }) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      offers.forEach(({ location: { latitude, longitude } }) => {
        leaflet
          .marker(
            {
              lat: latitude,
              lng: longitude,
            },
            {
              icon: defaultCustomIcon,
            },
          )
          .addTo(map);
      });
    }
  }, [map, offers]);

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
};

export default Map;
