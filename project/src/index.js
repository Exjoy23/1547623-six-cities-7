import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import dataSlice from './store/slices/data-slice';
import uiSlice from './store/slices/ui-slice';
import userSlice from './store/slices/user-slice';

import { redirect } from './store/middlewares/redirect';
import { createAPI } from './services/api';

import App from './components/app/app';

export const api = createAPI();

const store = configureStore({
  reducer: {
    dataSlice,
    uiSlice,
    userSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(redirect),
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
