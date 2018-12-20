import validator from 'validator';
import { email, password } from './constants';

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
  if (value.length < 4) {
    return 'Password must be at least 4 letters';
  }
  return '';
};

const validFunctions = {
  [email]: emailValid,
  [password]: passwordValid,
};


export default validFunctions;
