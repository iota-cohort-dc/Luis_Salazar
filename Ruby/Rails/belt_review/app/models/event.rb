class Event < ApplicationRecord
	belongs_to :user
	validates :name, :date, :city, :state, presence: true
	validates :name, :city, length: {minimum: 4}
	validate :isFuture

	has_many :users_attending, through: :attending, source: :user
	has_many :attending
	has_many :comments

	def isFuture
		if date < Date.today
			errors.add(:date, 'Must be greater than today')
		end
	end


end
