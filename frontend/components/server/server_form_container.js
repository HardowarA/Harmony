import { connect } from 'react-redux';
import { createServer } from '../../actions/server_actions';
import ServerForm from './server_form';
import { openModal, closeModal } from '../../actions/modal_actions';


const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createServer: (server) => dispatch(createServer(server)),
    closeModal: () => dispatch(closeModal())
    // createServer: (server) => dispatch(createServer(server))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServerForm);
