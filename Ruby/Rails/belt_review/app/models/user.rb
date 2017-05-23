class User < ApplicationRecord
	has_secure_password
	EMAIL_REGEX = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]+)\z/i

	validates :email, presence: true, uniqueness: { case_sensitive: false }, format: { with: EMAIL_REGEX }
	validates :first_name, :last_name, :city, :state, presence: true
	validates :password, :password_confirmation, presence: true, length: {minimum: 4}, :on => :register

	has_many :events, dependent: :nullify
	has_many :comments, dependent: :destroy
	has_many :events_attending, through: :attending, source: :event

	before_save :email_lowercase

	def email_lowercase
    	email.downcase!
  	end
end
