import random
def grade():

	num = random.randint(60,100)


	if num >= 60 and num <= 69:
		print 'Score:',num,'Your grade is D'
	if num >=70 and num <=79:
		print 'Score:',num,'Your grade is C'
	if num >=80 and num <= 89:
		print 'Score:',num,'Your grade is B'
	if num >= 90 and num<=100:
		print 'Score:',num,'Your grade is A'

		
grade()