import { emailSelector, passwordSelector } from './loginReducer';
import {
  firstNameSelector,
  lastNameSelector,
  userNameSelector,
  confirmPasswordSelector,
  emailSelector as regEmailSelector,
  passwordSelector as regPasswordSelector,
} from './registrationReducer';

const onLoginAsync = () => (dispatch, getState) => {
  const email = emailSelector(getState());
  const password = passwordSelector(getState());
  console.log('---mail---', email);
  console.log('---password---', password);
};

const onRegistrationAsync = () => (dispatch, getState) => {
  const email = regEmailSelector(getState());
  const password = regPasswordSelector(getState());
  const firstName = firstNameSelector(getState());
  const lastName = lastNameSelector(getState());
  const userName = userNameSelector(getState());
  const confirmPassword = confirmPasswordSelector(getState());
  console.log('---mail---', email);
  console.log('---password---', password);
  console.log('---firstName---', firstName);
  console.log('---lastName---', lastName);
  console.log('---userName---', userName);
  console.log('---confirmPassword---', confirmPassword);
};

export {
  onLoginAsync,
  onRegistrationAsync,
};
