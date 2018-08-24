import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

import './scss/index.scss';

import Game from '~components/App/Game'; // eslint-disable-line import/first

import registerServiceWorker from './registerServiceWorker';

const initialState = {
  stepNumber: 0,
  xIsNext: true
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case "CHANGE_STEP":
      return {
        stepNumber: action.stepNumber,
        xIsNext : action.xIsNext
      };
      default:
        return state;
  }
}
const store = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = () => (
  <Provider store={store}>
    <Game />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
