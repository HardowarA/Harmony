@users.each do |user|
  json.set! user.id do
    json.partial! 'api/users/user', user: user
    json.serverIds user.servers.pluck(:id)
    json.channelIds user.channels.pluck(:id)
  end
end
