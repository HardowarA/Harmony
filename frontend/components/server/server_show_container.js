import { connect } from 'react-redux';
import ServerShow from './server_show';
import { fetchServer } from '../../actions/server_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    server: state.entities.servers[ownProps.match.params.serverId]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchServer: (id) => dispatch(fetchServer(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServerShow);
