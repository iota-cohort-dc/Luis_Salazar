class User < ApplicationRecord
	EMAIL_REGEX = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]+)\z/i
	has_many :posts
	has_many :owners 
	has_many :messages
	has_many :blogs, through: :owners
	has_many :blog_posts, through: :posts, source: :blog 
	validates :fname, :lname, presence:true
	validates :email, presence: true, uniqueness: { case_sensitive: false }, format: { with: EMAIL_REGEX }
end
