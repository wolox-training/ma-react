import React from 'react';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import RegisterForm from './login.js';

class LoginContainer extends React.Component {
  submit = values => {
    window.alert(JSON.stringify(values.password, null, 4));
  };

  render() {
    return <RegisterForm onSubmit={this.submit} />;
  }
}

export default LoginContainer;
