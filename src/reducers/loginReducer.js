import { handleActions, createAction } from 'redux-actions';
import { get } from 'lodash';
import { createSelector } from 'reselect';

import { email, password, err } from '../helppers/constants';

export const onUpdate = createAction('ON_UPDATE');
export const onLoginError = createAction('ON_LOGIN_FETCH_ERROR');

export default handleActions({
  [onUpdate]: (state, { payload: { name, value } }) => ({ ...state, [name]: value }),
  [onLoginError]: (state, { payload: { value } }) => ({ ...state, [err]: value }),
}, {
  [email]: '',
  [password]: '',
  [err]: '',
});


const REDUCER_NAME = 'loginReducer';

export const stateSelector = (state) => get(state, REDUCER_NAME);
export const emailSelector = createSelector(stateSelector, (state) => get(state, email));
export const passwordSelector = createSelector(stateSelector, (state) => get(state, password));
export const errSelector = createSelector(stateSelector, (state) => get(state, err));
export const loginSelector = (state) => ({
  [email]: emailSelector(state),
  [password]: passwordSelector(state),
});
