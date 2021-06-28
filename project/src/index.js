import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { reducer } from './store/reducer';
import { createAPI } from './services/api';
import { ActionCreator } from './store/action';
import { AuthorizationStatus } from './const';

import App from './components/app/app';
import { redirect } from './store/middleware';

const api = createAPI(() =>
  store.dispatch(
    ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH),
  ),
);

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api), redirect)),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
