import React from 'react';
import ServerIndexItem from './server_index_item';
import WelcomePageContainer from '../welcome_page/welcome_page_container';
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
