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
  err,
} from '../helppers/constants';

export const onUpdate = createAction('ON_UPDATE_REGISTRATION_PAGE');
export const onRegistrationError = createAction('ON_ERROR_ REGISTRATION_PAGE');

const registartionPage = handleActions({
  [onUpdate]: (state, { payload: { name, value } }) => ({ ...state, [name]: value }),
  [onRegistrationError]: (state, { payload: { value } }) => ({ ...state, [err]: value }),
},
{
  [firstName]: '',
  [lastName]: '',
  [userName]: '',
  [email]: '',
  [password]: '',
  [confirmPassword]: '',
  [err]: '',
});

const REDUCER_NAME = 'registrationReducer';

export const stateSelector = (state) => get(state, REDUCER_NAME);
export const firstNameSelector = createSelector(stateSelector, (state) => get(state, firstName));
export const lastNameSelector = createSelector(stateSelector, (state) => get(state, lastName));
export const userNameSelector = createSelector(stateSelector, (state) => get(state, userName));
export const emailSelector = createSelector(stateSelector, (state) => get(state, email));
export const passwordSelector = createSelector(stateSelector, (state) => get(state, password));
export const errSelector = createSelector(stateSelector, (state) => get(state, err));
export const confirmPasswordSelector = createSelector(
  stateSelector,
  (state) => get(state, confirmPassword),
);
export const registrationSelector = (state) => ({
  [firstName]: firstNameSelector(state),
  [lastName]: lastNameSelector(state),
  [userName]: userNameSelector(state),
  [email]: emailSelector(state),
  [password]: passwordSelector(state),
  [confirmPassword]: confirmPasswordSelector(state),
});

export default registartionPage;
