import React from 'react';
import { Link } from 'react-router-dom';
import ChannelIndexContainer from './channel_index_container';
import MessagesContainer from '../message/messages_container';
import MessageInputContainer from '../message/message_input_container';



class ChannelShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchChannel(this.props.match.params.channelId);
    this.props.fetchUsers();
  }

  render() {
    let channel_name = '';
    const channel = this.props.channel;
    if (channel !== undefined) {
      channel_name = channel.channel_name;
    }

    const channelUsers = [];
    if(this.props.users !== undefined && channel !== undefined) {
      let allUsers = this.props.users;
      for(let key in allUsers) {
        let user = allUsers[key];
        if(channel.userIds.includes(user.id)) {
          channelUsers.push(user);
        }
      }
    }
    //
    return (
      <div className="channelShow">
        <div className="channelShowMessage">
          {channel_name}
        </div>

        <div>
          <MessagesContainer />
        </div>
        <div>
          <MessageInputContainer />
        </div>

        <br/>
        <div className="channelShowUser">
          <ul>Online:
            {channelUsers.map(function(user) {
              return <li><br/>{user.username}</li>
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default ChannelShow;
