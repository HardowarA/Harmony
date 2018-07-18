import { connect } from 'react-redux';
import ChannelShow from './channel_show';
import { fetchChannel } from '../../actions/channel_actions';
import { fetchUsers } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    channel: state.entities.channels[ownProps.match.params.channelId],
    users: state.entities.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchChannel: (id) => dispatch(fetchChannel(id)),
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelShow);
