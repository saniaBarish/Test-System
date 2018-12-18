import { emailSelector, passwordSelector } from './loginReducer';

const onLoginAsync = () => (dispatch, getState) => {
  const email = emailSelector(getState());
  const password = passwordSelector(getState());
  console.log('---mail---', email);
  console.log('---password---', password);
};

export default onLoginAsync;
