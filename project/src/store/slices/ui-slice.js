import { createSlice } from '@reduxjs/toolkit';

import { Locations, DEFAULT_SORT } from '../../const';

const SLICE_NAME = 'ui';

const initialState = {
  city: Locations.PARIS,
  activeSort: DEFAULT_SORT,
  activeCard: null,
};

const uiSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    changeCity(state, { payload }) {
      state.city = payload;
      state.activeSort = DEFAULT_SORT;
    },
    changeSort(state, { payload }) {
      state.activeSort = payload;
    },
    changeActiveCard(state, { payload }) {
      state.activeCard = payload;
    },
  },
});

export const { changeCity, changeSort, changeActiveCard } = uiSlice.actions;
export default uiSlice.reducer;
