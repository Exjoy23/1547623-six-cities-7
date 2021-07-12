import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import SortList from './sort-list';

describe('Component: SortList', () => {
  it('should render correctly', () => {
    const createFakeStore = configureStore({});
    const store = createFakeStore({});
    const { getByRole } = render(
      <Provider store={store}>
        <SortList
          sorts={[
            'Popular',
            'Price: low to high',
            'Price: high to low',
            'Top rated first',
          ]}
          activeSort={'Popular'}
          onSetIsActive={() => {}}
        />
      </Provider>,
    );
    expect(getByRole('list')).toBeInTheDocument();
  });
});
