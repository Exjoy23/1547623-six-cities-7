import { ActionType } from '../slices/user-slice';
import { browserHistory } from '../../components/app/app';

export const redirect = (_store) => (next) => (action) => {
  if (action.type === ActionType.REDIRECT_TO_ROUTE) {
    browserHistory.push(action.payload);
  }
  return next(action);
};
