import fakeBack from '../fakeBack';
import { loginSelector, onLoginError } from '../reducers/loginReducer';
import { onComeInPersonalArea } from '../reducers/personalAreaReducer';
import {
  login,
  email,
  password,
  firstName,
  lastName,
  userName,
} from '../helppers/constants';

const onLoginAsync = () => (dispatch, getState) => {
  const data = loginSelector(getState());
  fakeBack.post(`/${login}`, { data })
    .then((response) => dispatch(
      onComeInPersonalArea({
        [email]: response.email,
        [password]: response.password,
        [firstName]: response.firstName,
        [lastName]: response.lastName,
        [userName]: response.userName,
      }),
    ))
    .catch(
      ({ message }) => {
        dispatch(
          onLoginError({ name: message, value: message }),
        );
      },
    );
};

export default onLoginAsync;
