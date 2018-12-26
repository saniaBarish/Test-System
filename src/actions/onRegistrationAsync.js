import fakeBack from '../fakeBack';
import { registrationSelector, onRegistrationError } from '../reducers/registrationReducer';
import { registration, userName, email } from '../helppers/constants';

const onRegistrationAsync = () => (dispatch, getState) => {
  const data = registrationSelector(getState());
  fakeBack.post(`/${registration}`, { data })
    .then(
      (resolve) => console.log(resolve.status),
    )
    .catch(
      ({ message }) => {
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
