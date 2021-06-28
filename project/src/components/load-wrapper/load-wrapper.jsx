import React from 'react';
import PropTypes from 'prop-types';

function LoadWrapper({ isLoad, children, Spinner }) {
  return (isLoad && children) || <Spinner />;
}

LoadWrapper.propTypes = {
  isLoad: PropTypes.bool.isRequired,
  children: PropTypes.any,
  Spinner: PropTypes.func.isRequired,
};

export default LoadWrapper;
