import React from 'react';
import WelcomePageContainer from './welcome_page/welcome_page_container';
import { Route, HashRouter } from 'react-router-dom';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import { AuthRoute } from '../util/route_util';

const App = () => {
  return (
  <div>
    <header>
      <div className= "logo" >Harmony</div>
      <WelcomePageContainer />
    </header>
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
  </div>

  );
};

export default App;
