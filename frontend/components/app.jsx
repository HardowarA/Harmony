import React from 'react';
import WelcomePageContainer from './welcome_page/welcome_page_container';
import { Route, HashRouter } from 'react-router-dom';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';

import ServerIndexContainer from './server/server_index_container';
import ServerFormContainer from './server/server_form_container';
import ServerShowContainer from './server/server_show_container';

import { AuthRoute, Redirect } from '../util/route_util';

const App = () => {
  return (
  <div>
    <header>
      <div className="logo">
       <i className="fab fa-discord"></i>
        Harmony
      </div>
      <WelcomePageContainer />
    </header>
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />

    <Route exact path="/servers" component={ServerFormContainer} />
    <Route exact path="/servers/:serverId" component={ServerShowContainer} />

  </div>

  );
};

export default App;
