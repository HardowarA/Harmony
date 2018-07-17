json.extract! user, :id, :username
json.serverIds user.servers.pluck(:id)
json.channelIds user.channels.pluck(:id) 
