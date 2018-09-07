import { create } from 'redux';

const checkIfUserExists = async (email, password) => {
  const api = create({
    baseURL: 'http://localhost:4000',
    headers: { Accept: 'application/vnd.github.v3+json' }
  });

  // start making calls
  return api.get(`/users?email=${email}&password=${password}`);
};

export function thunkCheckIfUserExists(email, password) {
  return async dispatch => {
    dispatch({ type: 'LOGIN' });
    const response = await checkIfUserExists(email, password);
    if (response.ok && response.data.length > 0) {
      dispatch({ type: 'LOGIN_SUCCESS', payload: { user: response.data } });
      window.location.replace("/tictactoe");
    } else {
      dispatch({ type: 'LOGIN_FAILURE', payload: { error: response.error } });
      alert('User or password is incorrect');
    }
  };
}
