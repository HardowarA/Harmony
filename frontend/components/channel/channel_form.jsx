import React from 'react';
import { withRouter } from 'react-router';

class ChannelForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      channel_name: ''
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
    const channel = Object.assign({}, this.state);
    let hashRoute = location.hash;
    hashRoute = hashRoute.slice(2);
    let count = 0;
    let idx = -1
    for(let i = 0; i < hashRoute.length; i++) {
      if (hashRoute[i] === '/') {
        count += 1;
        if(idx = -1) {
          idx = i;
        }
      }
    }
    if (count > 1) {
      hashRoute = hashRoute.slice(0, idx);
    }
    hashRoute = 'api/' + hashRoute + '/channels';
    channel['route'] = hashRoute;
    this.props.createChannel(channel);
    this.setState({channel_name: ''});
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div onClick={this.props.closeModal}></div>
          <div> Make a new Channel! </div>
          <br/>
          <label>Channel Name:
            <br/>
            <input type="channel_name" value={this.state.channel_name} onChange={this.handleChange('channel_name')} />
          </label>
          <br/>
          <input type="submit" value={"Create Channel"} />
        </form>
      </div>
    );
  }
}

export default withRouter(ChannelForm);
