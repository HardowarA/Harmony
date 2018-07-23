import React from 'react';
import { Redirect } from 'react-router-dom';
import ServerIndexContainer from '../server/server_index_container';

const WelcomePage = (props) => {
  const notLoggedIn = () => {
    return (
      <Redirect to="/login" />
    );
  };

  const loggedIn = () => {
    return (
      <div className="welcomePage">
        <ServerIndexContainer />
      </div>
    );
  };

  if (props.currentUser) {
    return loggedIn();
  } else {
    return notLoggedIn();
  }

};

export default WelcomePage;
