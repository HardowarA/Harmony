import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, errorClear } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
    formType: 'login',
    navLink: <Link to="/signup" className="loginLink">Register</Link>,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    errorClear: (error) => dispatch(errorClear())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
