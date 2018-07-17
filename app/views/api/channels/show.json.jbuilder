json.channel do
  json.partial! '/api/channels/channel', channel: @channel
  json.userIds @channel.users.pluck(:id)
end
