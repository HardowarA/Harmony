import React from 'react';
import ServerIndexItem from './server_index_item';
import ServerFormContainer from './server_form_container';

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
      <div className="serverAndButton">
        <div className="serversList">
          {servers}
        </div>
        <button className="createServerButton" onClick={() => this.props.openModal('createServer')}>+</button>
      </div>
    );
  }
}

export default ServerIndex;
