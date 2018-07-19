json.channel do
  json.partial! '/api/channels/channel', channel: @channel
  json.userIds @channel.users.pluck(:id)
end

json.messages do
  @channel.messages.each do |message|
    json.partial! 'api/messages/message', message: message
  end
end
