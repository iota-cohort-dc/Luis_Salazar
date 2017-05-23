class User < ApplicationRecord
  has_secure_password
  EMAIL_REGEX = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]+)\z/i

  validates :email, presence: true, uniqueness: { case_sensitive: false }, format: { with: EMAIL_REGEX }
  validates :name, presence: true
  validates :password, :password_confirmation, presence: true, length: {minimum: 4}, :on => :create

  has_many :secrets, dependent: :nullify
  has_many :likes, dependent: :destroy
  has_many :secrets_liked, through: :likes, source: :secret

  before_save :email_lowercase

  def email_lowercase
    email.downcase!
  end
end
