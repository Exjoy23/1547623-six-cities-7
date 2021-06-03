import React from 'react';
import PropTypes from 'prop-types';

import Home from '../home/home';

function App({ offersCount }) {
  return <Home offersCount={offersCount} />;
}

App.propTypes = {
  offersCount: PropTypes.number.isRequired,
};

export default App;
