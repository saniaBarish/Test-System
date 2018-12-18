import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import loginReducer from '../reducers';

export default createStore(loginReducer, composeWithDevTools(applyMiddleware(thunk)));
