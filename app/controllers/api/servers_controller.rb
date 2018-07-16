class Api::ServersController < ApplicationController

  def index
    @servers = current_user.servers
    render 'api/servers/index'
  end

  def show
    @server = Server.find(params[:id])
    if current_user.servers.include?(@server)
      render 'api/servers/show'
    else
      render json: ['Invalid credentials to access'], status: 401
    end
  end

  def new
  end

  def create
    @server = Server.new(server_params)
    @server.creator_id = current_user.id
    if @server.save
      @server_membership = ServerMembership.new()
      @server_membership.user_id = current_user.id;
      @server_membership.server_id = @server.id; 
      @server_membership.save
      render 'api/servers/show'
    else
      render json: @server.errors.full_messages, status: 422
    end
  end

  def destroy
    @server = Server.find(params[:id])
    if @server.creator_id == current_user.id
      if @server.destroy
        render 'api/servers/show'
      else
        render json: @post.errors.full_messages, status: 422
      end
    else
      render json: ['Invalid credentials to access'], status: 401
    end
  end

  private

  def server_params
    params.require(:server).permit(:server_name)
  end

end
