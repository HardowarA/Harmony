# class Api::ServersController < ApplicationController
#
#   def index
#     @servers = current_user.servers.map{|server| Server.find_by(server.id)}
#     render 'api/servers/index'
#   end
#
#   def show
#     @server = Server.find_by(params[:id])
#     if current_user.servers.include?(@server.id) do
#       render 'api/servers/show'
#     else
#       render json: ['Invalid credentials to access'], status: 401
#     end
#   end
#
#   def new
#     debugger
#   end
#
#   def create
#     @server = Server.create(server_params)
#     @server.creator_id = current_user.id
#     if @server
#       render 'api/servers/show'
#     else
#       render json: @server.errors.full_messages, status: 422
#     end
#   end
#
#   def destroy
#     @server = Server.find_by(params[:id])
#     if @server.creator_id == current_user.id do
#       delete @server
#       render 'api/servers/index'
#     else
#       render json: ['Invalid credentials to access'], status: 401
#     end
#   end
#
#   private
#
#   # def getUserServers
#   #   @servers = Server.includes(:users)
#   # end
#
#   def server_params
#     params.require(:server).permit(:server_name)
#   end
#
# end
