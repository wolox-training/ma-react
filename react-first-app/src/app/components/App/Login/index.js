import React from 'react';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import RegisterForm from './login.js';
import { SubmissionError } from 'redux-form';
import {create} from 'apisauce';
import store from '../../../../redux/store';
import Redirect from 'react-router-dom/Redirect';
import { routerMiddleware, push } from 'react-router-redux'
import './login.css';

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
      .get(`/users?email=${values.email}&password=${values.password}`)
      .then((response) => {
        if(response.data[0])
          window.location.replace("/");
        else
          window.alert("User or password is incorrect");
      });*/

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
    return <RegisterForm onSubmit={this.props.onSubmit} />;
  }
}

const checkIfUserExists = async (email, password) => {
  const api = create({
    baseURL: 'http://localhost:4000',
    headers: {'Accept': 'application/vnd.github.v3+json'}
  })

  // start making calls
  return api.get(`/users?email=${email}&password=${password}`);
}

function thunkCheckIfUserExists(email, password) {
  return async dispatch => {
    dispatch({ type: 'LOGIN' });
    const response = await checkIfUserExists(email, password);
    if (response.ok) {
      dispatch({ type: 'LOGIN_SUCCESS', payload: { user: response.data } });
    } else {
      dispatch({ type: 'LOGIN_FAILURE', payload: { error: response.error } });
    }
    
    /*.then(
      user => store.dispatch(push("/")),
      error => window.alert('Email or password is incorrect')
    );*/
  };
}

const mapStateToProps = (state) => ({
  stepNumber: state.tictactoe.stepNumber,
  xIsNext: state.tictactoe.xIsNext
});

const mapDispatchToProps = dispatch => ({
  onSubmit: values => {
    dispatch(thunkCheckIfUserExists(values.email, values.password));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
