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
        <div>
          <br/>
          <br/>
            <ServerIndexItem key={server.id} server={server} />
          <br/>
          <br/>
        </div>
      );
    });

    return (
      <div> 
        <ul>
          {servers}
        </ul>
        <ServerFormContainer />
      </div>
    );
  }
}

export default ServerIndex;
