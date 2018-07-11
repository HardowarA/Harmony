import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
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
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Welcome to Harmony!
          <br/>
          Please {this.props.formType} or {this.props.navLink}
          {this.renderErrors()}
          <div>
            <br/>
            <label>Username:
              <input type="text" value={this.state.username} onChange={this.handleChange('username')} />
            </label>
            <br/>
            <label>Password:
              <input type="password" value={this.state.password} onChange={this.handleChange('password')} />
            </label>
            <br/>
            <input type="submit" value={this.props.formType} />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
