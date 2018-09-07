import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LoginContainer from '~components/App/Login/index.js';

import Game from '~components/App/Game';

import registerServiceWorker from './registerServiceWorker';
import store from './redux/store';
import CreativityView from '~components/App/Creativity';

const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/tictactoe" component={Game} />
        <Route path="/blank" component={CreativityView} />
        <Route path="/login" component={LoginContainer} />
      </div>
    </Router>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
