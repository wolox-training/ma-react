import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import routerReducer from 'react-router-redux';

import tictactoe from './tictactoe';

export default combineReducers({
  tictactoe,
  form: formReducer,
  routing: routerReducer
});
