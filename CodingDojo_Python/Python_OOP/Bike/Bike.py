class Bike(object):
	def __init__(self,price,max_speed):
		self.price = price
		self.max_speed = max_speed
		self.miles =0

	def displayInfo(self):
		print self.price,'monies'
		print self.max_speed
		print self.miles,'miles'
		print ''
		return self
		

	def ride(self):
		print 'Riding'
		self.miles = self.miles + 10
		print self.miles,'miles'
		return self
		

	def reverse(self):
		if self.miles <=0:
			pass
		else:
			print 'Reversing'
			self.miles = self.miles - 5
			print self.miles,'miles'
		return self

bike1 = Bike(200,"25mph")
bike2 = Bike(300,'40mph')
bike3 = Bike(400,'60mph')

bike1.ride().ride().ride().reverse().displayInfo()


bike2.ride().ride().ride().reverse().reverse().displayInfo()


bike3.reverse().reverse().reverse().displayInfo()





