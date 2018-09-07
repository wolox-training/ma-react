import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import { routerMiddleware, push } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import reducer from './tictactoe/reducers/index.js';

const history = createHistory();

const middlewares = [thunk, routerMiddleware(history)]; // routerMiddleware si tenes react-router-redux
const enhancers = [applyMiddleware(...middlewares)];

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(...enhancers));

export default store;
