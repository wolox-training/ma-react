import { combineReducers } from 'redux';
import { tictactoe as tictactoeReducer } from './tictactoe';
import { login as loginReducer } from './login';
import { reducer as formReducer } from 'redux-form';
import routerReducer from 'react-router-redux';

import tictactoe from './tictactoe';

export default combineReducers({
  tictactoe: tictactoeReducer,
  login: loginReducer,
  form: formReducer,
  routing: routerReducer
});
