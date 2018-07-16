# json.id @user.id
# json.username @user.username
json.partial! '/api/users/user', user: @user


# json.server do
#   json.partial! '/api/servers/server', server: @server
#   json.userIds @server.users.pluck(:id)
# end
