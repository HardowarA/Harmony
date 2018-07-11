import React from 'react';
import WelcomePageContainer from './welcome_page/welcome_page_container';
import { Route, HashRouter } from 'react-router-dom';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';

const App = () => {
  return (
  <div>
    <header>
      <h1> Harmony Online </h1>
      <WelcomePageContainer />
    </header>
    <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" component={SignupFormContainer} />
  </div>

  );
};

export default App;
