import random
class Human(object):
	def __init__(self, clan=None):
		# print "New Human"
	
		self.clan = clan
		self.health = 100
		self.strength = 3
		self.intelligence = 3
		self.stealth = 3
	def taunt(self):
		print "you want a piece of me?!"

		

	def attack(self):
		self.taunt()

		luck = round(random.random() * 100)
		if(luck > 50):
			if(luck * self.stealth > 150):
				print 'Attacking'
				return True
			else:
				print 'Missed'
				return False
		else:
			self.health -= self.strength
			print "Missed and Hurt"
			return False

# class Point(object):
# 	def __init__(self,x = 0,y = 0):
# 		print 'created new point'
# 		self.x = x
# 		self.y = y

# 	def distance(self):
# 		return (self.x**2 + self.y**2) ** 0.5

# class Test(object):
# 	def __init__(self,phrase="Nothing was passed"):
# 		print 'This string was passed in:' + phrase
# 		self.phrase = phrase



michael = Human('CodingDojo')
jimmy = Human('CodingNinjas')

michael.attack()
