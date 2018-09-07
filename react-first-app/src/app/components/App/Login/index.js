import React from 'react';
import { connect } from 'react-redux';
import { create } from 'apisauce';
import PropTypes from 'prop-types';

import RegisterForm from './login.js';
import './login.css';

class LoginContainer extends React.Component {
  render() {
    return <RegisterForm onSubmit={this.props.onSubmit} />;
  }
}

const checkIfUserExists = async (email, password) => {
  const api = create({
    baseURL: 'http://localhost:4000',
    headers: { Accept: 'application/vnd.github.v3+json' }
  });

  // start making calls
  return api.get(`/users?email=${email}&password=${password}`);
};

function thunkCheckIfUserExists(email, password) {
  return async dispatch => {
    dispatch({ type: 'LOGIN' });
    const response = await checkIfUserExists(email, password);
    if (response.ok && response.data.length > 0) {
      dispatch({ type: 'LOGIN_SUCCESS', payload: { user: response.data } });
      window.location.replace('/');
      // dispatch(push('/'));
    } else {
      dispatch({ type: 'LOGIN_FAILURE', payload: { error: response.error } });
      alert('User or password is incorrect');
    }
  };
}

const mapStateToProps = state => ({
  stepNumber: state.tictactoe.stepNumber,
  xIsNext: state.tictactoe.xIsNext
});

const mapDispatchToProps = dispatch => ({
  onSubmit: values => {
    dispatch(thunkCheckIfUserExists(values.email, values.password));
  }
});

LoginContainer.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
