import React from 'react';
import { Link } from 'react-router-dom';
import ServerIndexContainer from './server_index_container';

class ServerShow extends React.Component {
  // constructor(props) {
  //   super(props);
  //   debugger
  //   // this.forceUpdate();
  // }

  componentDidMount() {
    this.props.fetchServer(this.props.match.params.serverId);
  }


  // componentWillReceiveProps() {
  //   debugger
  // }
  //
  // shouldComponentUpdate(nextState, nextProps) {
  //   debugger
  // }
  //
  // componentWillUpdate(nextProps, nextState) {
  //   debugger
  // }
  //
  // componentDidUpdate(prevProps, prevState) {
  //   debugger
  // }
  //
  // componentWillUnmount() {
  //   debugger
  // }


  render() {
    let server_name = '';
    const server = this.props.server;
    if (server !== undefined) {
      server_name = server.server_name;
    }
    return (
      <div>
        <ServerIndexContainer />
        <br/>
        {server_name}
      </div>
    );
  }
}

export default ServerShow;
