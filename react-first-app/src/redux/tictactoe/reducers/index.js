import { combineReducers } from 'redux'
import tictactoe from './tictactoe'
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  tictactoe,
  form: formReducer
})
