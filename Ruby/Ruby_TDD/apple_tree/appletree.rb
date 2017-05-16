class Appletree
	attr_accessor :age
	attr_reader :height, :apples
	def initialize
		@age = 0
		@height = 1
		@apples = 0
	end
	def year_gone_by
		@age +=1
		@height *= 1.1
		@apples += 2 if (4..10).include?(@age)
	end
	def pick_apples
		@apples = 0
	end
	
	
end