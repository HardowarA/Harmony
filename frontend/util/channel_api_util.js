export const fetchChannels = (route) => {
  let count = 0;
  let slashNum = 0;
  let idx = -1
  for(let i = 0; i < route.length; i++) {
    if (route[i] === '/') {
      count += 1;
      slashNum += 1;
      if(slashNum == 3) {
        idx = i;
      }
    }
  }
  if (count > 3) {
    route = route.slice(0, idx);
    route += '/channels';
  }
  return $.ajax({
    method: 'GET',
    url: route
  });
};

export const fetchChannel = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/channels/${id}`
  });
};

export const createChannel = (channel) => {
  return $.ajax({
    method: 'POST',
    url: channel.route,
    data: { channel: {channel_name: channel.channel_name} }
  });
};

export const removeChannel = (channelId) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/channels/${channelId}`
  });
};
