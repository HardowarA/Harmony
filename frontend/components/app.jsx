import React from 'react';
import WelcomePageContainer from './welcome_page/welcome_page_container';
import { Route, HashRouter } from 'react-router-dom';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';

import ServerIndexContainer from './server/server_index_container';
import ServerFormContainer from './server/server_form_container';
import ServerShowContainer from './server/server_show_container';

import ChannelShowContainer from './channel/channel_show_container';

import { AuthRoute, Redirect } from '../util/route_util';

const App = () => {
  return (
    <div className ="app">
        <div className="serverIndex">
          <WelcomePageContainer />
        </div>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        
        <Route path="/servers/:serverId" component={ServerShowContainer} />
        <Route exact path="/servers/:serverId/:channelId" component={ChannelShowContainer} />
    </div>
  );
};

export default App;
