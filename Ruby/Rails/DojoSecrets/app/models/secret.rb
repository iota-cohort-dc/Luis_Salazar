class Secret < ApplicationRecord
  belongs_to :user
  has_many :likes, dependent: :destroy

  validates :secret, presence: true, length: {minimum: 5}
end
