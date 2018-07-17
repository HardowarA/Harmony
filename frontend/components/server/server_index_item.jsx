import React from 'react';
import { Link } from 'react-router-dom';


const ServerIndexItem = ({ server }) => {
  return (
    <Link to={`/servers/${server.id}`}>{server.server_name}</Link>
  );
};

export default ServerIndexItem;
