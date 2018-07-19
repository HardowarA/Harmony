class Message < ApplicationRecord
  validates :author_id, :body, :channel_id, presence: true

  belongs_to :author,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: :User

  belongs_to :channel,
  primary_key: :id,
  foreign_key: :channel_id,
  class_name: :Channel

  # has_one :server ?
  # through: channel,
  # source: server

  after_create_commit do
    NewMessageEventBroadcastJob.perform_later(self)
  end

  before_destroy do
    channel = Channel.find(self.channel_id)
    DeleteMessageEventBroadcastJob.perform_later(self, channel)
  end

end
