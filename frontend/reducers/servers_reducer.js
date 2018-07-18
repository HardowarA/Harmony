import { merge } from 'lodash';
import { RECEIVE_SERVERS, RECEIVE_SERVER, REMOVE_SERVER } from '../actions/server_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_CHANNEL, REMOVE_CHANNEL } from '../actions/channel_actions';


const serversReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  let channel;
  let stateholder;
  switch (action.type) {
    case RECEIVE_SERVERS:
      return action.servers;
    case RECEIVE_SERVER:
      return merge({}, state, {[action.server.id]: action.server});
    case REMOVE_SERVER:
      newState = merge({}, state);
      delete newState[action.serverId];
      return newState;
    case RECEIVE_CHANNEL:
      newState = merge({}, state);
      let channel = action.channel;
      for(let server in newState) {
        let stateholder = newState[server]
        if(stateholder.id === channel.server_id) {
          if(stateholder.channelIds.includes(channel.id) === false) {
            stateholder.channelIds.push(channel.id);
          }
          break;
        }
      }
      return newState;
    case REMOVE_CHANNEL:
      newState = merge({}, state);
      channel = action.channel;
      for(let key in newState) {
        let stateholder = newState[key]
        if(stateholder.id === channel.server_id) {
          let idx = stateholder.channelIds.indexOf(channel.id);
          stateholder.channelIds = stateholder.channelIds.slice(0, idx)
          .concat(stateholder.channelIds.slice(idx+1));
          break;
        }
      }
      return newState;
    default:
      return state;
  }
}

export default serversReducer;
