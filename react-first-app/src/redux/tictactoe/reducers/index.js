import { combineReducers } from 'redux';
import tictactoeReducer from './tictactoe';
import loginReducer from './login';
import { reducer as formReducer } from 'redux-form';
import routerReducer from 'react-router-redux';

export default combineReducers({
  tictactoe: tictactoeReducer,
  login: loginReducer,
  form: formReducer,
  routing: routerReducer
});
