class Post2 < ApplicationRecord
  	belongs_to :blog
 	belongs_to :user
 	has_many :messages, dependent: :destroy
	validates :title, :content, presence:true
	validates :title, length: {minimum: 7}
end
