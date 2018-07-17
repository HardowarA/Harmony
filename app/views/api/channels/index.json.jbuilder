@channels.each do |channel|
  json.set! channel.id do
    json.partial! 'api/channels/channel', channel: channel
    json.userIds channel.users.pluck(:id) 
  end
end
