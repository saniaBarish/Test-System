import validator from 'validator';
import { email, password, firstName, lastName, userName, confirmPassword, ANSWERS, QUESTIONS } from './constants';

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

const answerValid = (answers) => {
  if (answers.length === 0) {
    return 'The question must have at least one correct and incorrect answer.';
  }
  const right = answers.some((answer) => answer.status) ? '' : 'No right answer.';
  const wrong = answers.some((answer) => !answer.status) ? '' : 'No wrong answer.';
  return right || wrong;
};

const questionValid = (value) => {
  return validator.isEmpty(value) ? 'Please fill the field question' : '';
};

const validFunctions = {
  [email]: emailValid,
  [password]: passwordValid,
  [firstName]: firstNameValid,
  [lastName]: firstNameValid,
  [userName]: userNameValid,
  [confirmPassword]: confirmPasswordValid,
  [ANSWERS]: answerValid,
  [QUESTIONS]: questionValid,
};


export default validFunctions;
