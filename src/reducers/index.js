import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import registrationReducer from './registrationReducer';
import personalAreaReducer from './personalAreaReducer';

export default combineReducers({
  loginReducer,
  registrationReducer,
  personalAreaReducer,
});
