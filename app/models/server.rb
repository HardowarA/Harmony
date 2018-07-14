# == Schema Information
#
# Table name: servers
#
#  id          :bigint(8)        not null, primary key
#  server_name :string           not null
#  creator_id  :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Server < ApplicationRecord
  validates :server_name, :creator_id, presence: true

  has_many :server_memberships,
  primary_key: :id,
  foreign_key: :server_id,
  class_name: :ServerMembership

  has_many :users,
  through: :server_memberships,
  source: :users

  belongs_to :creator,
  primary_key: :id,
  foreign_key: :creator_id,
  class_name: :User

end
