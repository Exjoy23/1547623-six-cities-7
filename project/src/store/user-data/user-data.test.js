import { userData } from './user-data';
import { ActionType } from '../actions';

describe('Reducer: userData', () => {
  it('without additional parameters should return initial state', () => {
    expect(userData(undefined, {})).toEqual({
      authorizationStatus: 'UNKNOWN',
      user: {},
      isReviewSending: false,
      isReviewSuccess: false,
      isReviewError: false,
    });
  });

  it('should update authorization status by require authorization', () => {
    const state = {
      authorizationStatus: 'UNKNOWN',
      user: {},
      isReviewSending: false,
      isReviewSuccess: false,
      isReviewError: false,
    };
    const requireAuthorizationAction = {
      type: ActionType.REQUIRE_AUTHORIZATION,
      payload: 'AUTH',
    };

    expect(userData(state, requireAuthorizationAction)).toEqual({
      authorizationStatus: 'AUTH',
      user: {},
      isReviewSending: false,
      isReviewSuccess: false,
      isReviewError: false,
    });
  });

  it('should update authorization status by logout', () => {
    const state = {
      authorizationStatus: 'AUTH',
      user: {},
      isReviewSending: false,
      isReviewSuccess: false,
      isReviewError: false,
    };
    const logoutAction = {
      type: ActionType.LOGOUT,
      payload: 'NO_AUTH',
    };

    expect(userData(state, logoutAction)).toEqual({
      authorizationStatus: 'NO_AUTH',
      user: {},
      isReviewSending: false,
      isReviewSuccess: false,
      isReviewError: false,
    });
  });

  it('should update user status by load user info', () => {
    const state = {
      authorizationStatus: 'AUTH',
      user: {},
      isReviewSending: false,
      isReviewSuccess: false,
      isReviewError: false,
    };
    const loadUserInfoAction = {
      type: ActionType.LOAD_USER_INFO,
      payload: { user: 'info' },
    };

    expect(userData(state, loadUserInfoAction)).toEqual({
      authorizationStatus: 'AUTH',
      user: { user: 'info' },
      isReviewSending: false,
      isReviewSuccess: false,
      isReviewError: false,
    });
  });

  it('should update is review sending status by set is review sending', () => {
    const state = {
      authorizationStatus: 'AUTH',
      user: { user: 'info' },
      isReviewSending: false,
      isReviewSuccess: false,
      isReviewError: false,
    };
    const setIsReviewSendingAction = {
      type: ActionType.SET_IS_REVIEW_SENDING,
      payload: true,
    };

    expect(userData(state, setIsReviewSendingAction)).toEqual({
      authorizationStatus: 'AUTH',
      user: { user: 'info' },
      isReviewSending: true,
      isReviewSuccess: false,
      isReviewError: false,
    });
  });

  it('should update is review success status by set is review success', () => {
    const state = {
      authorizationStatus: 'AUTH',
      user: { user: 'info' },
      isReviewSending: false,
      isReviewSuccess: false,
      isReviewError: false,
    };
    const setIsReviewSuccessAction = {
      type: ActionType.SET_IS_REVIEW_SUCCESS,
      payload: true,
    };

    expect(userData(state, setIsReviewSuccessAction)).toEqual({
      authorizationStatus: 'AUTH',
      user: { user: 'info' },
      isReviewSending: false,
      isReviewSuccess: true,
      isReviewError: false,
    });
  });

  it('should update is review error status by set is review error', () => {
    const state = {
      authorizationStatus: 'AUTH',
      user: { user: 'info' },
      isReviewSending: false,
      isReviewSuccess: false,
      isReviewError: false,
    };
    const setIsReviewErrorAction = {
      type: ActionType.SET_IS_REVIEW_ERROR,
      payload: true,
    };

    expect(userData(state, setIsReviewErrorAction)).toEqual({
      authorizationStatus: 'AUTH',
      user: { user: 'info' },
      isReviewSending: false,
      isReviewSuccess: false,
      isReviewError: true,
    });
  });
});
