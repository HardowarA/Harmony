import { merge } from 'lodash';
import { RECEIVE_CHANNELS, RECEIVE_CHANNEL, REMOVE_CHANNEL } from '../actions/channel_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_MESSAGE, REMOVE_MESSAGE } from '../actions/message_actions';


const channelsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_CHANNELS:
      return action.channels;
    case RECEIVE_CHANNEL:
      return merge({}, state, {[action.channel.id]: action.channel});
    case REMOVE_CHANNEL:
      newState = merge({}, state);
      delete newState[action.channelId];
      return newState;
    case RECEIVE_MESSAGE:

      newState = merge({}, state);
      for( let key in newState ) {
        let stateholder = newState[key];
        if(action.payload.channel.id === stateholder.id) {
          let arrayKeys = Object.keys(action.payload.messages);
          let lastMessage = parseInt(arrayKeys[arrayKeys.length-1]);
          stateholder.message_ids.push(lastMessage);
        }
      }
      return newState;
    case REMOVE_MESSAGE:
      return Object.assign({}, state, action.payload.channel);

    // case RECEIVE_CURRENT_USER:
    // //action.creator?
    //   return merge({}, state, { [action.creator]: action.creator })
    default:
      return state;
  }
}

export default channelsReducer;
