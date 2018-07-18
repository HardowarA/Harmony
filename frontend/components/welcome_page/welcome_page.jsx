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
      <div>
      <ServerIndexContainer />
        <div className="currentUserInfo">
          <h2>
            Welcome {props.currentUser.username}#{props.currentUser.id}
          </h2>
          <button className="logoutButton" onClick={ props.logout }>
            Logout
          </button>
        </div>

      </div>
    );
  };

  if (props.currentUser) {
    return loggedIn();
  } else {
    return notLoggedIn();
  }
  // ${props.currentUser.serverIds[0]}

};

export default WelcomePage;
