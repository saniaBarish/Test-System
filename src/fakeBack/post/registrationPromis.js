import { users } from '../../helppers/constants';

const registrationPromis = ({ data }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const usersLocal = JSON.parse(localStorage.getItem(users));
      if (usersLocal) {
        if (usersLocal.some((user) => user.email === data.email)) {
          reject(new Error('email'));
        } else if (usersLocal.some((user) => user.userName === data.userName)) {
          reject(new Error('userName'));
        } else {
          localStorage.setItem(users, JSON.stringify([...usersLocal, data]));
          resolve(data);
        }
      } else {
        localStorage.setItem(users, JSON.stringify([data]));
        resolve(data);
      }
    }, 2000);
  });
};

export default registrationPromis;
