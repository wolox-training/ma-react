import React from 'react';
import ReactDOM from 'react-dom';

import './scss/index.scss';
import registerServiceWorker from './registerServiceWorker';

import Game from '~components/App/Game'; // eslint-disable-line import/first

import { createStore } from "redux";
import { Provider } from "react-redux";

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
const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <Game />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
