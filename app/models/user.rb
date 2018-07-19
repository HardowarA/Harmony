# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#

class User < ApplicationRecord
  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: {minimum: 6}, allow_nil: true

  has_many :server_memberships,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :ServerMembership

  has_many :servers,
  through: :server_memberships,
  source: :server

  has_many :channel_memberships,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :ChannelMembership

  has_many :channels,
  through: :channel_memberships,
  source: :channel

  has_many :messages,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: :Message  

  attr_reader :password

  after_initialize :ensure_session_token

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user if user && user.is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token
    self.session_token = generate_session_token
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= generate_session_token
  end

  def generate_session_token
    SecureRandom.urlsafe_base64(16)
  end




end
