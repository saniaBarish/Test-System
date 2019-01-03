import { tests } from '../../helppers/constants';

const addTestPromise = ({ data }) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const testsLocal = JSON.parse(localStorage.getItem(tests));
      if (testsLocal) {
        localStorage.setItem(tests, JSON.stringify([...testsLocal, data]));
        resolve(data);
      } else {
        localStorage.setItem(tests, JSON.stringify([data]));
        resolve(data);
      }
    }, 2000);
  });
};

export default addTestPromise;
