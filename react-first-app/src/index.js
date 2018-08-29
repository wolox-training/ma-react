import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './scss/index.scss';
import registerServiceWorker from './registerServiceWorker';
import store from './redux/store.js';
import Game from '~components/App/Game';

const App = () => (
  <Provider store={store}>
    <Game />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
