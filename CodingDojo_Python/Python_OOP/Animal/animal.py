class Animal(object):
	def __init__(self, name):
		self.name = name
		self.health = 100

	def walk(self):
		self.health -= 1
		return self

	def run(self):
		self.health -= 5
		return self

	def displayHealth(self):
		print 'Animal:', self.name
		print 'Health:', self.health, 'HP'
		print ''
		

class Dog(Animal):
	"""docstring for Dog"""
	def __init__(self,name):
		super(Dog, self).__init__(name)
		self.health = 150

	def pet(self):
		self.health += 5
		return self

class Dragon(Animal):
	"""docstring for Dragon"""

	def __init__(self,name):
		super(Dragon, self).__init__(name)
		self.health = 170
	
	def displayHealth(self):
		print 'This is a Dragon'
		super(Dragon,self).displayHealth()
	
	def fly(self):
		self.health -= 10
		return self
		
		
		

liger = Animal('Liger')
brawly = Dog('Dog')
pete = Dragon('Pete')

liger.walk().walk().walk().run().run().displayHealth()
brawly.walk().walk().walk().run().run().pet().displayHealth()
pete.walk().walk().walk().run().run().fly().fly().displayHealth()
