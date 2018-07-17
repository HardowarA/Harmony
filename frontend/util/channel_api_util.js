export const fetchChannels = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/channels'
  });
};

export const fetchChannel = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/channels/${id}`
  });
};

export const createChannel = (channelPackage) => {
  return $.ajax({
    method: 'POST',
    url: `api/servers/${channelPackage.server_id}/channels`,
    data: { channel: {channel_name: channelPackage.channel_name} }
  });
};

export const removeChannel = (channelId) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/channels/${channelId}`
  });
};
