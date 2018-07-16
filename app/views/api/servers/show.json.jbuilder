json.server do
  json.partial! '/api/servers/server', server: @server
  json.userIds @server.users.pluck(:id)
end

json.creator do
  json.partial! '/api/users/user', user: @server.creator
end
