class User < ApplicationRecord
	has_many :messages
	has_many :comments

	validates :name, presence: true, length: {minimum: 5}, uniqueness: true

end
