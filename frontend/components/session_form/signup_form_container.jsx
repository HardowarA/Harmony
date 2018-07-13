import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, errorClear } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
    formType: 'signup',
    navLink: <Link to="/login" className="loginLink">Already have an account?</Link>,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    errorClear: () => dispatch(errorClear())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
