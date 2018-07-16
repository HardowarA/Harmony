import { connect } from 'react-redux';
import { createServer } from '../../actions/server_actions';
import ServerForm from './server_form';

const mapStateToProps = (state) => { 
  return {
    currentUser: state.entities.users[state.session.id]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createServer: (user) => dispatch(createServer(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServerForm);
