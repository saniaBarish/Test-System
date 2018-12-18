import { createStore } from 'redux';
import { helloWorldReduser } from '../reducers';

export default createStore(helloWorldReduser,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
