import { connect } from 'react-redux';
import Messages from './messages'
import { fetchChannel } from '../../actions/channel_actions';
import { receiveMessage, removeMessage } from '../../actions/message_actions';
import { receiveServer } from '../../actions/server_actions';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => {
  return {
    channelId: ownProps.match.params.channelId,
    channel: state.entities.channels[ownProps.match.params.channelId],
    messages: selectMessages(state, ownProps),
    users: state.entities.users
  }
}

const selectMessages = (state, ownProps) => {
  if(state.entities.channels[ownProps.match.params.channelId] !== undefined) {
    let channel = state.entities.channels[ownProps.match.params.channelId];
    let messages = channel.message_ids.sort((a,b) => a - b).map((id) => state.entities.messages[id]);
    return messages;
  }
}

const mapDispatchToProps = dispatch => ({
  fetchChannel: (id) => dispatch(fetchChannel(id)),
  receiveMessage: (message) => dispatch(receiveMessage(message)),
  receiveServer: (server) => dispatch(receiveServer(server)),
  removeMessage: (message) => dispatch(removeMessage(message))
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Messages));
