import React from 'react';
import PropTypes from 'prop-types';

function ImageList({ images }) {
  return images.map((item) => (
    <div key={item} className="property__image-wrapper">
      <img className="property__image" src={item} alt="studio" />
    </div>
  ));
}

ImageList.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
};

export default ImageList;
