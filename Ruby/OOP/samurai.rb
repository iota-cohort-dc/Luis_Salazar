require_relative 'Human'
class Samurai < Human
	@@samurai_count = 0
	def initialize
		super
		@@samurai_count += 1
		@health = 200
	end	
	def death_blow(obj)
		obj.health = 0
		self
	end
	def meditate
		@health = 200
		self
	end
	def self.num_of_sams
	    puts @@samurai_count
	 end

end

samurai1 = Samurai.new
samurai2 = Samurai.new
samurai3 = Samurai.new

Samurai.num_of_sams
samurai3.death_blow(samurai2)
puts samurai2.health
