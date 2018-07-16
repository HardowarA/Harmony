import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash';
import { RECEIVE_SERVER, REMOVE_SERVER } from '../actions/server_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.currentUser.id]: action.currentUser });
    case RECEIVE_SERVER:
      newState = merge({}, state, { [action.creator.id]: action.creator });
      return newState;
    case REMOVE_SERVER:
      newState = merge({}, state);
      for(let key in newState) {
        let stateholder = newState[key];
        if (action.userIds.includes(stateholder.id)) {
          let idx = stateholder.serverIds.indexOf(action.serverId);
          stateholder.serverIds = stateholder.serverIds.slice(0, idx)
          .concat(stateholder.serverIds.slice(idx+1));
        }
      }
      return newState;
      // delete newState[action.serverId];
      // return newState;
      // delete stateholder.serverIds[idx];
    default:
      return state;
  }
}

export default usersReducer;
