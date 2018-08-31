import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './scss/index.scss';
import registerServiceWorker from './registerServiceWorker';
import store from './redux/store';
import Game from '~components/App/Game';
import LoginContainer from '~components/App/Login/index.js';



const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={Game} />
        <Route path="/login" component={LoginContainer} />
      </div>
    </Router>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
