import { createAction, handleActions } from 'redux-actions';
import { createSelector } from 'reselect';
import { get } from 'lodash';

import { user, authorization } from '../helppers/constants';


export const onComeInProfile = createAction('ON_COME_IN_PROFILE');
export const onLogout = createAction('ON_LOGOUT');
export const onLogin = createAction('ON_LOGIN');

export default handleActions({
  [onComeInProfile]: (state, { payload }) => ({ ...state, [user]: payload }),
  [onLogout]: (state) => ({ ...state, [authorization]: false, [user]: {} }),
  [onLogin]: (state) => ({ ...state, [authorization]: true }),
},
{
  [user]: {},
  [authorization]: false,
});

export const REDUCER_NAME = 'profileReducer';

export const stateSelector = (state) => get(state, REDUCER_NAME);
export const userSelector = createSelector(stateSelector, (state) => get(state, user));
export const authorizationSelector = createSelector(
  stateSelector,
  (state) => get(state, authorization),
);
