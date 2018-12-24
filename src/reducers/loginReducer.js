import { handleActions, createAction } from 'redux-actions';
import { get } from 'lodash';
import { createSelector } from 'reselect';

import { email, password } from '../containers/helppers/constants';

export const onUpdate = createAction('ON_UPDATE');

export default handleActions({
  [onUpdate]: (state, { payload: { name, value } }) => ({ ...state, [name]: value }),
}, {
  [email]: '',
  [password]: '',
});


const REDUCER_NAME = 'loginReducer';

export const stateSelector = (state) => get(state, REDUCER_NAME);
export const emailSelector = createSelector(stateSelector, (state) => get(state, email));
export const passwordSelector = createSelector(stateSelector, (state) => get(state, password));
