import { users } from '../../helppers/constants';

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
export default loginPromise;
