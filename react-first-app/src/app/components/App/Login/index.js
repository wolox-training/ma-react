import React from 'react';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import RegisterForm from './login.js';
import { SubmissionError } from 'redux-form';
import {create} from 'apisauce';
import store from '../../../../redux/store';

class LoginContainer extends React.Component {
  submit = values => {

    store.dispatch(thunkCheckIfUserExists(values.email, values.password));
    // define the api
    /*const api = create({
      baseURL: 'http://localhost:4000',
      headers: {'Accept': 'application/vnd.github.v3+json'}
    })

    // start making calls
    api
      .get('/users')
      .then((response) => response.data[0].name)
      .then(console.log)*/

    /*api.post('/users', {id: 2, name: 'Steve', email: 'steve@gmail.com'}, {headers: {'x-gigawatts': '1.21'}})*/
    /*if (['kent@gmail.com', 'andy@gmail.com', 'john@gmail.com', 'joel@gmail.com'].includes(values.email)) {
      window.alert(JSON.stringify(values, null, 4));
    } else {
      throw new SubmissionError({
        email: 'Email not registered'
      });
    }*/
  };

  render() {
    return <RegisterForm onSubmit={this.submit} />;
  }
}

function checkIfUserExists(email, password) {
  const api = create({
    baseURL: 'http://localhost:4000',
    headers: {'Accept': 'application/vnd.github.v3+json'}
  })

  // start making calls
  api
    .get(`/users?email=${email}&password=${password}`)
    .then((response) => response.data[0])
}

function thunkCheckIfUserExists(email, password) {

  return function (dispatch) {
    return checkIfUserExists(email, password).then(
      user => store.dispatch((push("/"))),
      error => window.alert('Email or password is incorrect')
    );
  };
}

export default LoginContainer;
