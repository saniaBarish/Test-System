import { push } from 'react-router-redux';

import fakeBack from '../fakeBack';
import { registrationSelector, onRegistrationError } from '../reducers/registrationReducer';
import { onComeInProfile } from '../reducers/profileReducer';
import { registration, userName, email, firstName, lastName } from '../helppers/constants';

import { offLoading } from '../reducers/loadingReducer';

const onRegistrationAsync = () => (dispatch, getState) => {
  const data = registrationSelector(getState());
  fakeBack.post(`/${registration}`, { data })
    .then(
      (response) => {
        dispatch(onComeInProfile({
          [email]: response.email,
          [firstName]: response.firstName,
          [lastName]: response.lastName,
          [userName]: response.userName,
        }));
        dispatch(push('/profile'));
      },
    )
    .catch(
      ({ message }) => {
        dispatch(offLoading());
        if (message === email) {
          dispatch(
            onRegistrationError({ name: message, value: 'Account with this Email already exist' }),
          );
        }
        if (message === userName) {
          dispatch(
            onRegistrationError({ name: message, value: 'Account with this User name already exist' }),
          );
        }
      },
    );
};

export default onRegistrationAsync;
