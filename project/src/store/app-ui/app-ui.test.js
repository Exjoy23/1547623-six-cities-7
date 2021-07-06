import { appUi } from './app-ui';
import { ActionType } from '../actions';

describe('Reducer: appUi', () => {
  it('without additional parameters should return initial state', () => {
    expect(appUi(undefined, {})).toEqual({
      activeCity: 'Paris',
      activeSort: 'Popular',
      activeCard: null,
    });
  });

  it('should update active city by change active city', () => {
    const state = {
      activeCity: 'Paris',
      activeSort: 'Popular',
      activeCard: null,
    };
    const changeActiveCityAction = {
      type: ActionType.CHANGE_ACTIVE_CITY,
      payload: 'Amsterdam',
    };

    expect(appUi(state, changeActiveCityAction)).toEqual({
      activeCity: 'Amsterdam',
      activeSort: 'Popular',
      activeCard: null,
    });
  });

  it('should update active sort by change active sort', () => {
    const state = {
      activeCity: 'Paris',
      activeSort: 'Popular',
      activeCard: null,
    };
    const changeActiveSortAction = {
      type: ActionType.CHANGE_ACTIVE_SORT,
      payload: 'By price',
    };

    expect(appUi(state, changeActiveSortAction)).toEqual({
      activeCity: 'Paris',
      activeSort: 'By price',
      activeCard: null,
    });
  });

  it('should update active card by change active card', () => {
    const state = {
      activeCity: 'Paris',
      activeSort: 'Popular',
      activeCard: null,
    };
    const changeActiveCardAction = {
      type: ActionType.CHANGE_ACTIVE_CARD,
      payload: 23,
    };

    expect(appUi(state, changeActiveCardAction)).toEqual({
      activeCity: 'Paris',
      activeSort: 'Popular',
      activeCard: 23,
    });
  });
});
