class NewMessageEventBroadcastJob < ApplicationJob
  queue_as :default

  def perform(message)
    ActionCable.server.broadcast(
      ("chat_#{message.channel_id}"),
      payload: ActiveSupport::JSON.decode(message_handler(message)),
      command: "update_message"
    )
  end

  private

  def message_handler(message)
    ApplicationController.render(
      partial: 'api/messages/show',
      locals: { message: message }
    )
  end
end
