import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { reducer } from './store/reducer';

import App from './components/app/app';

const store = createStore(reducer, composeWithDevTools());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
