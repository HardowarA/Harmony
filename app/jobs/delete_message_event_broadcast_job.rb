class DeleteMessageEventBroadcastJob < ApplicationJob
  queue_as :default

  def perform(message, channel)
    ActionCable.server.broadcast(
      ("chat_#{message.channel_id}"),
      payload: ActiveSupport::JSON.decode(message_handler(message, channel)),
      command: "delete_message"
    )
  end

  private

  def message_handler(message, channel)
    ApplicationController.render(
      partial: 'api/messages/deleteaction',
      locals: { message: message, channel: channel }
    )
  end
end
