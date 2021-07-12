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
      isFavoritesError: false,
      isAuthorizationError: false,
      isOffline: false,
    });
  });

  it('should update authorization status by require authorization', () => {
    const state = {
      authorizationStatus: 'UNKNOWN',
      user: {},
      isReviewSending: false,
      isReviewSuccess: false,
      isReviewError: false,
      isFavoritesError: false,
      isAuthorizationError: false,
      isOffline: false,
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
      isFavoritesError: false,
      isAuthorizationError: false,
      isOffline: false,
    });
  });

  it('should update authorization status by logout', () => {
    const state = {
      authorizationStatus: 'AUTH',
      user: {},
      isReviewSending: false,
      isReviewSuccess: false,
      isReviewError: false,
      isFavoritesError: false,
      isAuthorizationError: false,
      isOffline: false,
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
      isFavoritesError: false,
      isAuthorizationError: false,
      isOffline: false,
    });
  });

  it('should update user status by load user info', () => {
    const state = {
      authorizationStatus: 'AUTH',
      user: {},
      isReviewSending: false,
      isReviewSuccess: false,
      isReviewError: false,
      isFavoritesError: false,
      isAuthorizationError: false,
      isOffline: false,
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
      isFavoritesError: false,
      isAuthorizationError: false,
      isOffline: false,
    });
  });

  it('should update is review sending status by set is review sending', () => {
    const state = {
      authorizationStatus: 'AUTH',
      user: { user: 'info' },
      isReviewSending: false,
      isReviewSuccess: false,
      isReviewError: false,
      isFavoritesError: false,
      isAuthorizationError: false,
      isOffline: false,
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
      isFavoritesError: false,
      isAuthorizationError: false,
      isOffline: false,
    });
  });

  it('should update is review success status by set is review success', () => {
    const state = {
      authorizationStatus: 'AUTH',
      user: { user: 'info' },
      isReviewSending: false,
      isReviewSuccess: false,
      isReviewError: false,
      isFavoritesError: false,
      isAuthorizationError: false,
      isOffline: false,
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
      isFavoritesError: false,
      isAuthorizationError: false,
      isOffline: false,
    });
  });

  it('should update is review error status by set is review error', () => {
    const state = {
      authorizationStatus: 'AUTH',
      user: { user: 'info' },
      isReviewSending: false,
      isReviewSuccess: false,
      isReviewError: false,
      isFavoritesError: false,
      isAuthorizationError: false,
      isOffline: false,
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
      isFavoritesError: false,
      isAuthorizationError: false,
      isOffline: false,
    });
  });

  it('should update is favorites error status by set is favorites error', () => {
    const state = {
      authorizationStatus: 'AUTH',
      user: { user: 'info' },
      isReviewSending: false,
      isReviewSuccess: false,
      isReviewError: false,
      isFavoritesError: false,
      isAuthorizationError: false,
      isOffline: false,
    };
    const setIsFavoritesError = {
      type: ActionType.SET_IS_FAVORITES_ERROR,
      payload: true,
    };

    expect(userData(state, setIsFavoritesError)).toEqual({
      authorizationStatus: 'AUTH',
      user: { user: 'info' },
      isReviewSending: false,
      isReviewSuccess: false,
      isReviewError: false,
      isFavoritesError: true,
      isAuthorizationError: false,
      isOffline: false,
    });
  });

  it('should update is authorization error status by set is authorization error', () => {
    const state = {
      authorizationStatus: 'AUTH',
      user: { user: 'info' },
      isReviewSending: false,
      isReviewSuccess: false,
      isReviewError: false,
      isFavoritesError: false,
      isAuthorizationError: false,
      isOffline: false,
    };
    const setIsAuthorizationError = {
      type: ActionType.SET_IS_AUTHORIZATION_ERROR,
      payload: true,
    };

    expect(userData(state, setIsAuthorizationError)).toEqual({
      authorizationStatus: 'AUTH',
      user: { user: 'info' },
      isReviewSending: false,
      isReviewSuccess: false,
      isReviewError: false,
      isFavoritesError: false,
      isAuthorizationError: true,
      isOffline: false,
    });
  });

  it('should update is offline status by set is offline', () => {
    const state = {
      authorizationStatus: 'AUTH',
      user: { user: 'info' },
      isReviewSending: false,
      isReviewSuccess: false,
      isReviewError: false,
      isFavoritesError: false,
      isAuthorizationError: false,
      isOffline: false,
    };
    const setIsOffline = {
      type: ActionType.SET_IS_OFFLINE,
      payload: true,
    };

    expect(userData(state, setIsOffline)).toEqual({
      authorizationStatus: 'AUTH',
      user: { user: 'info' },
      isReviewSending: false,
      isReviewSuccess: false,
      isReviewError: false,
      isFavoritesError: false,
      isAuthorizationError: false,
      isOffline: true,
    });
  });
});
