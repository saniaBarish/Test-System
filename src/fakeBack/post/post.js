import { users, login, registration } from '../../helppers/constants';

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

const loginPromise = ({ data }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const usersLocal = JSON.parse(localStorage.getItem(users));
      if (!usersLocal) {
        reject(new Error('Wrong email or password'));
      }
      const userData = usersLocal.filter((user) => {
        return user.email === data.email && user.password === data.password;
      });
      userData.length ? resolve(userData[0]) : reject(new Error('Wrong email or password'));
    }, 2000);
  });
};

const post = (url, data) => {
  if (url === `/${registration}`) {
    return registrationPromis(data);
  }
  if (url === `/${login}`) {
    return loginPromise(data);
  }
  return new Promise((resolve, reject) => {
    reject(new Error('invalid url'));
  });
};

export default post;
