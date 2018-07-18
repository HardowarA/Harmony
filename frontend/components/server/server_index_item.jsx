import React from 'react';
import { Link, Redirect } from 'react-router-dom';

const ServerIndexItem = ({ server }) => {

  const redirectServer = (server) => {
    return(
      <Redirect to={`/servers/${server.id}`} />
    );
  };

  return (
    <Link to={`/servers/${server.id}`} onClick={redirectServer}>
      {server.server_name}
    </Link>
  );
};

export default ServerIndexItem;
