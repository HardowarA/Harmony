import React from 'react';
import { Link, Redirect } from 'react-router-dom';

const ChannelIndexItem = ({ channel }) => {

  const redirectChannel = (channel) => {
    return(
      <Redirect to={`/servers/${channel.server_id}/${channel.id}`} />
    );
  };

  return (
    <Link to={`/servers/${channel.server_id}/${channel.id}`} onClick={redirectChannel}>{channel.channel_name}</Link>
  );
};

export default ChannelIndexItem;
