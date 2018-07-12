import React from 'react';
import { Link, Redirect } from 'react-router-dom';

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
          Welcome {props.currentUser.username}
        </h2>
        <button onClick={ props.logout }>
          Logout
        </button>
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
