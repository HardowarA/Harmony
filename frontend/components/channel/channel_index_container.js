import { connect } from 'react-redux';
import { fetchChannels } from '../../actions/channel_actions';
import ChannelIndex from './channel_index';

const mapStateToProps = (state) => {
  return {
    channels: Object.values(state.entities.channels),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchChannels: (route) => dispatch(fetchChannels(route)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelIndex);
