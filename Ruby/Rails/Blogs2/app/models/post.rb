class Post < ApplicationRecord
	has_many :messages
	belongs_to :user
	belongs_to :blog

  	# added the comments relationship
  	has_many :comments, as: :commentable

	validates :content, :title, presence: true
end
