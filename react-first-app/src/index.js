import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Game from '~components/App/Game';

import './scss/index.scss';
import registerServiceWorker from './registerServiceWorker';
import store from './redux/store.js';

const App = () => (
  <Provider store={store}>
    <Game />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
