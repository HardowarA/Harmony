import React from 'react';
import { Link, Redirect } from 'react-router-dom';

const ServerIndexItem = ({ server }) => {

  const redirectServer = (server) => {
    return(
      <Redirect to={`/servers/${server.id}`} />

    );
  };

  let firstLetter = server.server_name.slice(0, 1).toUpperCase();


  return (
    <Link to={`/servers/${server.id}`} onClick={redirectServer} className="serverItem">
        {firstLetter}
    </Link>
  );
};

export default ServerIndexItem;
