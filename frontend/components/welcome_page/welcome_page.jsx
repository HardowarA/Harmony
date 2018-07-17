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
        <h2>
          Welcome {props.currentUser.username}#{props.currentUser.id}
        </h2>
        <button onClick={ props.logout }>
          Logout
        </button>
        <Redirect to={`/servers/${props.currentUser.serverIds[0]}`} />
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
