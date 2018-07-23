import { connect } from 'react-redux';
import { fetchChannels } from '../../actions/channel_actions';
import ChannelIndex from './channel_index';
import { openModal } from '../../actions/modal_actions';
import { logout } from '../../actions/session_actions';


const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    channels: Object.values(state.entities.channels),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchChannels: (route) => dispatch(fetchChannels(route)),
    openModal: (modal) => dispatch(openModal(modal)),
    logout: () => {
      return dispatch(logout());
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelIndex);
