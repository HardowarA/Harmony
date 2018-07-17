import * as ChannelApiUtil from '../util/channel_api_util';

export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS';
export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';
export const REMOVE_CHANNEL = 'REMOVE_CHANNEL';

const receiveChannels = (channels) => {
  return {
    type: RECEIVE_CHANNELS,
    channels
  }
}

const receiveChannel = (payload) => {
  return {
    type: RECEIVE_CHANNEL,
    channel: payload.channel,
  }
}

const removeChannel = (payload) => {
  return {
    type: REMOVE_CHANNEL,
    channelId: payload.channel.id,
    channel: payload.channel,
    userIds: payload.channel.userIds
  }
}

export const fetchChannels = () => {
  return dispatch => {
    return ChannelApiUtil.fetchChannels().then(channels => {
      return dispatch(receiveChannels(channels))
    });
  };
};

export const fetchChannel = (id) => {
  return dispatch => {
    return ChannelApiUtil.fetchChannel(id).then(channel => {
      return dispatch(receiveChannel(channel))
    });
  };
};

export const createChannel = (channelPackage) => {
  return dispatch => {
    return ChannelApiUtil.createChannel(channelPackage).then(channel => {
      return dispatch(receiveChannel(channel))
    });
  };
};

export const deleteChannel = (channelId) => {
  return dispatch => {
    return ChannelApiUtil.removeChannel(channelId).then(channel => {
      return dispatch(removeChannel(channel))
    });
  };
};
