json.extract! user, :id, :username
json.serverIds user.servers.pluck(:id)
