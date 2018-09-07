import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import RegisterForm from './login.js';
import './login.css';
import { thunkCheckIfUserExists } from '../../../../redux/login/actions';

class LoginContainer extends React.Component {
  render() {
    return <RegisterForm onSubmit={this.props.onSubmit} />;
  }
}

const mapStateToProps = (state) => ({
  logged: state.logged,
  user: state.user
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
