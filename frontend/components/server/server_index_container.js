import { connect } from 'react-redux';
import { fetchServers } from '../../actions/server_actions';
import ServerIndex from './server_index';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
  return {
    servers: Object.values(state.entities.servers),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchServers: () => dispatch(fetchServers()),
    openModal: (modal) => dispatch(openModal(modal)) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServerIndex);
