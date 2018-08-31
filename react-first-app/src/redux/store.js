import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './tictactoe/reducers/index.js';
import { browserHistory } from 'react-router';
import { routerMiddleware, push } from 'react-router-redux';

const middleware = routerMiddleware(browserHistory)
const store = createStore(
  reducer,
  applyMiddleware(thunk),
  applyMiddleware(middleware)
);

export default store;
