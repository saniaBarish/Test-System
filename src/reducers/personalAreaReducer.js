import { createAction, handleActions } from 'redux-actions';
import { createSelector } from 'reselect';
import { get } from 'lodash';

import { user } from '../helppers/constants';


export const onComeInPersonalArea = createAction('ON_COME_IN_PERSONAL_AREA');

export default handleActions({
  [onComeInPersonalArea]: (state, { payload }) => ({ ...state, [user]: payload }),
}, { [user]: '' });

export const REDUCER_NAME = 'personalAreaReducer';

export const stateSelector = (state) => get(state, REDUCER_NAME);
export const userSelector = createSelector(stateSelector, (state) => get(state, user));
