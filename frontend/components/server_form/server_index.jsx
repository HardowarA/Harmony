import React from 'react';
import ServerIndexItem from './server_index_item';

class ServerIndex extends React.Component {

  componentDidMount() {
    this.props.fetchServers();
  }

  render() {
    const servers = this.props.servers.map(server => {
      return (
        <ServerIndexItem key={server.id} server={server} />
      );
    });

    return (
      <div>
        <ul>
          {servers}
        </ul>
      </div>
    );
  }
}

export default ServerIndex;
