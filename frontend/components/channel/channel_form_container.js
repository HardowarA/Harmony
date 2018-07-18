import { connect } from 'react-redux';
import { createChannel } from '../../actions/channel_actions';
import ChannelForm from './channel_form';

const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id] 
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createChannel: (channel) => dispatch(createChannel(channel))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelForm);
