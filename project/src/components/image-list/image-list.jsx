import React from 'react';
import PropTypes from 'prop-types';

function ImageList({ images }) {
  return (
    <div className="property__gallery">
      {images.map((item) => (
        <div key={item} className="property__image-wrapper">
          <img className="property__image" src={item} alt="studio" />
        </div>
      ))}
    </div>
  );
}

ImageList.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
};

export default ImageList;
