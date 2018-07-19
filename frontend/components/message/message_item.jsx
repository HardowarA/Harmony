import React from 'react';

class MessageItem extends React.Component {
  constructor(props) {
    super(props)
    //
  }

  render() {
    return (
      <li className="message-li">
        <div className="message-content">
          <div className="message-items-container">
            <h3 className="message-author">{this.props.message.author.username}
            </h3>
            <h3 className="message-text"> {this.props.message.body}</h3>
          </div>
        </div>
      </li>
    )
  }
}

export default MessageItem;
