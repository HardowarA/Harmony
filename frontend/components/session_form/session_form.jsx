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
    let loginToggle = '';
    let buttonWords = 'Continue';
    if (this.props.formType === 'login') {
      loginToggle = 'Need an account?';
      buttonWords = 'Login';
    }
    return (
      <div className='authWrap'>
        <form className='authForm' onSubmit={this.handleSubmit}>
          <div className='title' >Welcome back!</div>
          <div className='sub-title' >We're so excited to see you again!'</div>
          <br/>
          {this.renderErrors()}
          <div className='loginContainer'>
            <br/>
            <label className='loginLabel'>Username:
              <br/>
              <input type="text" value={this.state.username} onChange={this.handleChange('username')} />
            </label>
            <br/>
            <label className='loginLabel'>Password:
              <br/>
              <input type="password" value={this.state.password} onChange={this.handleChange('password')} />
            </label>
            <br/>
            <input type="submit" value={buttonWords} />
          </div>
          <div className='login-toggle' >{loginToggle} {this.props.navLink}</div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
