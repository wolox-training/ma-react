import { combineReducers } from 'redux'
import tictactoe from './tictactoe'
import { reducer as formReducer } from 'redux-form';
import routerReducer from 'react-router-redux';

export default combineReducers({
  tictactoe,
  form: formReducer,
  routing: routerReducer
})
