import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { reducer } from './store/reducer';
import { createAPI } from './services/api';
import { ActionCreator } from './store/action';
import { fetchOfferList } from './store/api-actions';
import { AuthorizationStatus } from './const';

import App from './components/app/app';

const api = createAPI(() =>
  store.dispatch(
    ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH),
  ),
);

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api))),
);

// store.dispatch(checkAuth());
store.dispatch(fetchOfferList());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
