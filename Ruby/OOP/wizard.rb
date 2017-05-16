require_relative 'Human'
require_relative 'Ninja'
class Wizard < Human
	

	def initialize
		super
		@health = 50
		@intelligence = 25

	end
	def heal
		@health += 10
		self
	end
	def fireball(obj)
		obj.health -= 20
		self
	end


end

wizard1 = Wizard.new
wizard2 = Wizard.new
wizard3 = Wizard.new
ninja4 = Ninja.new

wizard1.fireball(wizard3)
puts wizard3.health
puts "Ninja #{ninja4.health}"
