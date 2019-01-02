import { push } from 'react-router-redux';

import fakeBack from '../fakeBack';
import { loginSelector, onLoginError } from '../reducers/loginReducer';
import { onComeInProfile, onLogin } from '../reducers/profileReducer';
import { offLoading } from '../reducers/loadingReducer';
import {
  login,
  email,
  firstName,
  lastName,
  userName,
} from '../helppers/constants';

const onLoginAsync = () => (dispatch, getState) => {
  const data = loginSelector(getState());
  fakeBack.post(`/${login}`, { data })
    .then((response) => {
      dispatch(
        onComeInProfile({
          [email]: response.email,
          [firstName]: response.firstName,
          [lastName]: response.lastName,
          [userName]: response.userName,
        }),
      );
      dispatch(onLogin());
      dispatch(push('/profile'));
      dispatch(offLoading());
    })
    .catch(
      ({ message }) => {
        dispatch(offLoading());
        dispatch(
          onLoginError({ name: message, value: message }),
        );
      },
    );
};

export default onLoginAsync;
