
import validFunctions from './validationHelppers';
import { validators } from './constants';

const isValidator = (value) => (type) => value === type;

const verifyValidation = (name, value) => {
  if (validators.some(isValidator(name))) {
    return validFunctions[name](value);
  }
  return null;
};

export default verifyValidation;
