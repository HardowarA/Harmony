import { merge } from 'lodash';
import { RECEIVE_CHANNELS, RECEIVE_CHANNEL, REMOVE_CHANNEL } from '../actions/channel_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';


const channelsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CHANNELS:
      return action.channels;
    case RECEIVE_CHANNEL:
      return merge({}, state, {[action.channel.id]: action.channel});
    case REMOVE_CHANNEL:
      let newState = merge({}, state);
      delete newState[action.channelId];
      return newState;
    // case RECEIVE_CURRENT_USER:
    // //action.creator?
    //   return merge({}, state, { [action.creator]: action.creator })
    default:
      return state;
  }
}

export default channelsReducer;
