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
        <div className="currentUserInfo">
          <h5>
            Welcome {props.currentUser.username}#{props.currentUser.id}
          </h5>
          <button className="logoutButton" onClick={ props.logout }>
            Logout
          </button>
        </div>
      </div>
    );
  };

  // <div className="currentUserInfo">
  // <Redirect to={`/servers/${props.currentUser.serverIds[0]}`} />
  // </div>
  //
  if (props.currentUser) {
    return loggedIn();
  } else {
    return notLoggedIn();
  }
  // ${props.currentUser.serverIds[0]}

};

export default WelcomePage;
