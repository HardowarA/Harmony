import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage = (props) => {

  const notLoggedIn = () => {
    return (
      <nav>
        <Link to="/login">Login  </Link>

        <Link to="/signup">  Sign Up</Link>
      </nav>
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
    return (
      <nav> </nav>
    )
  }
  // } else {
  //   return notLoggedIn();
  // }

};

export default WelcomePage;
