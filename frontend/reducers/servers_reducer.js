import { merge } from 'lodash';
import { RECEIVE_SERVERS, RECEIVE_SERVER, REMOVE_SERVER } from '../actions/server_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';


const serversReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SERVERS:
      return action.servers;
    case RECEIVE_SERVER:
      return merge({}, state, {[action.server.id]: action.server});
    case REMOVE_SERVER:
      let newState = merge({}, state);
      delete newState[action.serverId];
      return newState;
    // case RECEIVE_CURRENT_USER:
    // //action.creator?
    //   return merge({}, state, { [action.creator]: action.creator })
    default:
      return state;
  }
}

export default serversReducer;
