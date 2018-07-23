import React from 'react';
import MessageItem from './message_item';
import ActionCable from 'actioncable';

class Messages extends React.Component {
  constructor(props) {
    super(props);
  }

  getMessages() {
    this.props.fetchChannel(this.props.channelId);
  }

  componentDidMount() {
    this.props.fetchChannel(this.props.channelId);
    setInterval(() => {this.getMessages()}, 1000);

  }

  componentDidUpdate(prevProps) {
    if (this.props.channelId !== prevProps.channelId) {
       this.props.fetchChannel(this.props.channelId);
     }
    if(prevProps.messages !== undefined && this.props.messages !== undefined){
      if(prevProps.messages[prevProps.messages.length-1] !== undefined && this.props.messages[this.props.messages.length-1] !== undefined){
        if (prevProps.messages[prevProps.messages.length-1].id !== this.props.messages[this.props.messages.length-1].id) {
          this.props.fetchChannel(this.props.channelId);
       }
      }
    }
  }

  render() {
    const { users } = this.props;
    if(this.props.messages === undefined) {
      return (
        <div className="messages-box">
        </div>
      )
    } else {
      if ( this.props.messages[0] === undefined ) {
        return (
          <div className="messages-box">
          </div>
        )
      } else {
        let messages = this.props.messages;
        return (
          <div className="messages-box">
            <ul className="messages-ul">
              { messages.map ((message) => {
                return <MessageItem key={message.id} message={message} author={users[message.author_id]}/>
              })}
            </ul>
          </div>
        )
      }
    }
  }
}

export default Messages;
