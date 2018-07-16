import React from 'react';
import { withRouter } from 'react-router';
import ServerIndexContainer from './server_index_container';

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
  }

  // renderErrors() {
  //   return(
  //     <ul className="errorUlLogin">
  //       {this.props.errors.map((error, i) => (
  //         <li key={`error-${i}`}>
  //           {error}
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // }

  // componentDidMount() {
  //   this.props.errorClear();
  // }

  render() {
    return (
      <div>
        <ServerIndexContainer />
        <form onSubmit={this.handleSubmit}>
          <div> Make a new Server! </div>
          <br/>
          <label>Server Name:
            <br/>
            <input type="server_name" value={this.state.server_name} onChange={this.handleChange('server_name')} />
          </label>
          <br/>
          <input type="submit" value={"Create Server"} />
        </form>
      </div>
    );
  }
}

export default withRouter(ServerForm);
