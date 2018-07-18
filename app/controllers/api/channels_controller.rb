class Api::ChannelsController < ApplicationController

  def index
    allChannels = current_user.channels
    @channels = allChannels.select {|channel| channel.server_id == params[:server_id].to_i}
    # @channels = params[:server_id]
    render 'api/channels/index'
  end

  def show
    @channel = Channel.find(params[:id])
    if current_user.channels.include?(@channel)
      render 'api/channels/show'
    else
      render json: ['Invalid credentials to access'], status: 401
    end
  end


  def new
  end

  def create
    @channel = Channel.new(channel_params)
    @channel.server_id = params[:server_id]
    if @channel.save
      @channel_membership = ChannelMembership.new()
      @channel_membership.user_id = current_user.id;
      @channel_membership.channel_id = @channel.id;
      @channel_membership.save
      render 'api/channels/show'
    else
      render json: @channel.errors.full_messages, status: 422
    end
  end

  def destroy
    @channel = Channel.find(params[:id])
    @server = Server.find(@channel.server_id)
    if @server.creator_id == current_user.id
      if @channel.destroy
        render 'api/channels/show'
      else
        render json: @channel.errors.full_messages, status: 422
      end
    else
      render json: ['Invalid credentials to access'], status: 401
    end
  end

  private

  def channel_params
    params.require(:channel).permit(:channel_name)
  end

end
