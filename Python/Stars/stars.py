#Part 1
def draw_stars(arr):
	for i in (arr):
		arr = '*' *  i
		print arr

draw_stars([4,6,1,3,5,7,25])

#Part 2


def draw_stars(arr):

	for i in arr:
		if type(i) == int:
			stars = '*' *  i
			print stars
		else:
			print i[0].lower() * len(i)
draw_stars([4,'tom',1,'micka',5,7,'Jimmmmmmy'])
