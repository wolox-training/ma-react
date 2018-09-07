import { combineReducers } from 'redux';
<<<<<<< 8de10c2cc88d5c96dc681b1eaa63110200e0d490
import { tictactoe as tictactoeReducer } from './tictactoe';
import { login as loginReducer } from './login';
=======
import tictactoe from './tictactoe';
import { login } from './login';
>>>>>>> topbar finished, still is missing the rebase with routing1
import { reducer as formReducer } from 'redux-form';
import routerReducer from 'react-router-redux';

import tictactoe from './tictactoe';

export default combineReducers({
  tictactoe: tictactoeReducer,
  login: loginReducer,
  form: formReducer,
  routing: routerReducer
});
