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
    this.demo = this.demo.bind(this);
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
      <ul className="errorUlLogin">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  componentDidMount() {
    this.props.errorClear();
  }

  demo(e) {
    e.preventDefault();
    this.setState({
      username: "Demo_User"
    })
    this.props.processForm({ username: "Demo_User", password: 123456 });
  }

  render() {
    // //
    let loginToggle = '';
    let buttonWords = 'Continue';
    let messageOne = 'Create an account';
    let messageTwo;
    let demoButtonBool = '';
    if (this.props.formType === 'login') {
      loginToggle = 'Need an account?';
      buttonWords = 'Login';
      messageOne = 'Welcome back!';
      messageTwo = 'We\'re so excited to see you again!';
      demoButtonBool = <button className='demoButton' onClick={this.demo}>Demo User</button>;
    }
    return (
      <div className='applogin'>
        <div className="logo">
         <i className="fab fa-discord"></i>
        </div>
        <div className='authWrap'>
          <form className='authForm' onSubmit={this.handleSubmit}>
            <div className='title' >{messageOne}</div>
            <div className='sub-title' >{messageTwo}</div>
            <br/>
            <div className='loginErrors'>{this.renderErrors()}</div>
              <br/>
              <label className='loginLabel'>Username:
                <br/>
                <input className="loginInput" type="text" value={this.state.username} onChange={this.handleChange('username')} />
              </label>
              <br/>
              <label className='loginLabel'>Password:
                <br/>
                <input className="loginInput" type="password" value={this.state.password} onChange={this.handleChange('password')} />
              </label>
              <br/>
              <input className="loginButton" type="submit" value={buttonWords} />
              {demoButtonBool}
            <div className='login-toggle' >{loginToggle} {this.props.navLink}</div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
