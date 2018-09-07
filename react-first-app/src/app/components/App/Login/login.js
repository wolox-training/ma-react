import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import { customInput, customSelect } from './fields/index.js';
import { validate } from './validation';
import './login.css';

class RegisterForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field name="email" component={customInput} type="text" label="Email" />
        <Field name="password" component={customInput} type="password" label="Password" />
        <button type="submit">Log in</button>
      </form>
    );
  }
}

RegisterForm = reduxForm({
  form: 'register',
  validate
})(RegisterForm);

export default RegisterForm;
