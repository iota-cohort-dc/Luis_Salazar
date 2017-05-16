require_relative 'Human'
class Ninja < Human

	def initialize
		super
		@stealth = 175
	end

	def steal(obj)
		attack(obj)
		@health += 10
		self
	end

	def get_away
		@health -= 15
		self
	end

end

ninja1 = Ninja.new
ninja2 = Ninja.new

ninja1.steal(ninja2)
ninja2.health