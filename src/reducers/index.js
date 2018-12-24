import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import registrationReducer from './registrationReducer';

export default combineReducers({
  loginReducer,
  registrationReducer,
});
