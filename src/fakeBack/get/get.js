import { users } from '../../helppers/constants';

const usersPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const usersLocal = JSON.parse(localStorage.getItem(users));
    usersLocal ? resolve({ status: 200, result: usersLocal }) : reject(new Error('There is no registered user'));
  }, 500);
});

const get = (url) => {
  if (url === `/${users}`) {
    return usersPromise;
  }
};

export default get;
