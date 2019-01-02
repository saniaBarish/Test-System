import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import reducers from '../reducers';

export const history = createBrowserHistory();
const middleware = routerMiddleware(history);

export default createStore(reducers, composeWithDevTools(applyMiddleware(thunk, middleware)));
