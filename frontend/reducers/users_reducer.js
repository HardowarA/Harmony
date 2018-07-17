import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash';
import { RECEIVE_SERVER, REMOVE_SERVER } from '../actions/server_actions';
import { RECEIVE_CHANNEL, REMOVE_CHANNEL } from '../actions/channel_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  let channel;
  let stateholder;
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
    case RECEIVE_CHANNEL:
      newState = merge({}, state);
      channel = action.channel;
      for(let key in newState) {
        let stateholder = newState[key];
        if (channel.userIds.includes(stateholder.id)) {
          stateholder.channelIds.push(channel.id);
        }
      }
      return newState;
    case REMOVE_CHANNEL:
      newState = merge({}, state);
      channel = action.channel;
      for(let key in newState) {
        stateholder = newState[key];
        if (channel.userIds.includes(stateholder.id)) {
          let idx = stateholder.channelIds.indexOf(channel.id)
          stateholder.channelIds = stateholder.channelIds.slice(0, idx)
          .concat(stateholder.channelIds.slice(idx+1));
        }
      }
      return newState;
    default:
      return state;
  }
}

export default usersReducer;
