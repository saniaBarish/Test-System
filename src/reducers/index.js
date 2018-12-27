import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import registrationReducer from './registrationReducer';
import profileReducer from './profileReducer';
import loadingReducer from './loadingReducer';
import questionReducer from './questionReducer';

export default combineReducers({
  loginReducer,
  registrationReducer,
  profileReducer,
  loadingReducer,
  questionReducer,
});
