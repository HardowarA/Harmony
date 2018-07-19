class Channel < ApplicationRecord
  validates :channel_name, :server_id, presence: true

  belongs_to :server,
  primary_key: :id,
  foreign_key: :server_id,
  class_name: :Server

  has_many :channel_memberships,
  primary_key: :id,
  foreign_key: :channel_id,
  class_name: :ChannelMembership

  has_many :users,
  through: :channel_memberships,
  source: :user

  has_many :messages,
  primary_key: :id,
  foreign_key: :channel_id,
  class_name: :Message 

end
