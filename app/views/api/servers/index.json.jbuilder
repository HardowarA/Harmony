@servers.each do |server|
  json.set! server.id do
    json.partial! 'api/servers/server', server: server
    json.userIds server.users.pluck(:id)
    json.channelIds server.channels.pluck(:id) 
  end
end
