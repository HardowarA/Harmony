import { connect } from 'react-redux';
import { fetchChannels } from '../../actions/channel_actions';
import ChannelIndex from './channel_index';
import { openModal } from '../../actions/modal_actions';


const mapStateToProps = (state) => {
  return {
    channels: Object.values(state.entities.channels),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchChannels: (route) => dispatch(fetchChannels(route)),
    openModal: (modal) => dispatch(openModal(modal)) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelIndex);
