import { createAction, handleActions } from 'redux-actions';
import { get } from 'lodash';
import { createSelector } from 'reselect';
import {
  firstName,
  lastName,
  userName,
  email,
  password,
  confirmPassword,
} from '../containers/helppers/constants';

export const onUpdate = createAction('ON_UPDATE_REGISTRATION_PAGE');

const registartionPage = handleActions({
  [onUpdate]: (state, { payload: { name, value } }) => ({ ...state, [name]: value }),
},
{
  [firstName]: '',
  [lastName]: '',
  [userName]: '',
  [email]: '',
  [password]: '',
  [confirmPassword]: '',
});

const REDUCER_NAME = 'registrationReducer';

export const stateSelector = (state) => get(state, REDUCER_NAME);
export const firstNameSelector = createSelector(stateSelector, (state) => get(state, firstName));
export const lastNameSelector = createSelector(stateSelector, (state) => get(state, lastName));
export const userNameSelector = createSelector(stateSelector, (state) => get(state, userName));
export const emailSelector = createSelector(stateSelector, (state) => get(state, email));
export const passwordSelector = createSelector(stateSelector, (state) => get(state, password));
export const confirmPasswordSelector = createSelector(
  stateSelector,
  (state) => get(state, confirmPassword),
);

export default registartionPage;
