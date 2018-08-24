import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './scss/index.scss';

import Game from '~components/App/Game'; // eslint-disable-line import/first

import registerServiceWorker from './registerServiceWorker';

import store from './redux/store.js';

const App = () => (
  <Provider store={store}>
    <Game />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
