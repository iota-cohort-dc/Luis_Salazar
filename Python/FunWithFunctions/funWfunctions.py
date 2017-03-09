#Odd/Even
def odd_even(a,b):
	for i in range (a,b):
		if i % 2 == 1:
			print 'number is',i, 'this is an odd number'
		else:
			print 'number is',i,'this is an even number'
print odd_even(1,2001)

#Multiply
# a = [2,4,10,16]

def multipy(a,b):
	newList = [i * b for i in a]
	print newList

multipy([2,4,10,16],5)

	