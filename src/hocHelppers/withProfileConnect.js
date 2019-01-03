import { connect } from 'react-redux';
import {
  authorizationSelector,
  onLogout,
} from '../reducers/profileReducer';
import { authorization } from '../helppers/constants';

const withProfileConnect = (View) => {
  return connect(
    (state) => ({ [authorization]: authorizationSelector(state) }),
    (dispatch) => ({
      onLogout,
      dispatch,
    }),
  )(View);
};

export default withProfileConnect;
