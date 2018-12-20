import { email, password } from './constants';

const validator = require('validator');

const verifyValidation = (type, value) => {
  if (type === email) {
    if (validator.isEmpty(value)) {
      return 'Please fill in the field Email';
    }
    if (!validator.isEmail(value)) {
      return 'Invalid Email';
    }
    return '';
  }
  if (type === password) {
    if (validator.isEmpty(value)) {
      return 'Please fill in the field Password';
    }
    if (value.length < 4) {
      return 'Password must be at least 4 letters';
    }
    return '';
  }
  return '';
};

export default verifyValidation;
