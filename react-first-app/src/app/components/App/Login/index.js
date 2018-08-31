import React from 'react';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import RegisterForm from './login.js';
import { SubmissionError } from 'redux-form';

class LoginContainer extends React.Component {
  submit = values => {
    if (['kent@gmail.com', 'andy@gmail.com', 'john@gmail.com', 'joel@gmail.com'].includes(values.email)) {
      window.alert(JSON.stringify(values, null, 4));
    } else {
      throw new SubmissionError({
        email: 'Email not registered'
      });
    }
  };

  render() {
    return <RegisterForm onSubmit={this.submit} />;
  }
}

export default LoginContainer;
