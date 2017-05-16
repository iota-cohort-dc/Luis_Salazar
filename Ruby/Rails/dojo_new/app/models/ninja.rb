class Ninja < ApplicationRecord
  belongs_to :dojo
validates :f_name, :l_name, presence: true

end
