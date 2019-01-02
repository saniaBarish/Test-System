import { login, registration, CREATE_TEST } from '../../helppers/constants';
import loginPromise from './loginPromise';
import registrationPromis from './registrationPromis';
import addTestPromise from './addTestPromise';

const post = (url, data) => {
  if (url === `/${registration}`) {
    return registrationPromis(data);
  }
  if (url === `/${login}`) {
    return loginPromise(data);
  }
  if (url === `/${CREATE_TEST}`) {
    return addTestPromise(data);
  }
  return new Promise((resolve, reject) => {
    reject(new Error('invalid url'));
  });
};

export default post;
