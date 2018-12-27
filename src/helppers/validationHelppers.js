import validator from 'validator';
import { email, password, firstName, lastName, userName, confirmPassword } from './constants';

const emailValid = (value) => {
  if (validator.isEmpty(value)) {
    return 'Please fill in the field Email';
  }
  if (!validator.isEmail(value)) {
    return 'Invalid Email';
  }
  return '';
};

const passwordValid = (value) => {
  if (validator.isEmpty(value)) {
    return 'Please fill in the field Password';
  }
  if (value.length < 8) {
    return 'Password must be at least 8 letters';
  }
  if (!value.match(/[A-Z]/)) {
    return 'Password must have at least one capital letter';
  }
  if (!value.match(/[0-9]/)) {
    return 'Password must have at least one number';
  }
  return '';
};

const firstNameValid = (value) => {
  if (validator.isEmpty(value)) {
    return 'Please fill the field';
  }
  return '';
};

const userNameValid = (value) => {
  if (value.split(' ').length > 1) {
    return 'Username must not have spaces';
  }
  return firstNameValid(value);
};

const confirmPasswordValid = ({ value, password: value2 }) => {
  if (value !== value2) {
    return 'Wrong Confirm Password';
  }
  return '';
};

const validFunctions = {
  [email]: emailValid,
  [password]: passwordValid,
  [firstName]: firstNameValid,
  [lastName]: firstNameValid,
  [userName]: userNameValid,
  [confirmPassword]: confirmPasswordValid,
};


export default validFunctions;
