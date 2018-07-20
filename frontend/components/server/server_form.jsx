import React from 'react';
import { withRouter } from 'react-router';

class ServerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      server_name: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const server = Object.assign({}, this.state);
    this.props.createServer(server);
    this.setState({server_name: ''});
  }

  render() {
    return (
      <div className="create-server-container">
      <div> Make a new Server! </div>
      <div className="create-server-div">
        <form onSubmit={this.handleSubmit}>
          <div onClick={this.props.closeModal}></div>
          <br/>
          <label>Server Name:
            <br/>
            <br/>
            <input type="server_name" value={this.state.server_name} onChange={this.handleChange('server_name')} />
          </label>
          <br/>
          <br/>
          <input type="submit" value={"Create Server"} />
        </form>
      </div>
      </div>
    );
  }
}

export default withRouter(ServerForm);
