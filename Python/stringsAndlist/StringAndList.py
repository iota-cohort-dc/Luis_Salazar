#Find and Replace
str = "If monkeys like bananas, then i must be a monkey!"
print str.find("monkey")
newStr = str.replace('monkey','alligator',1)
print newStr

#Min and Mx
x = [2,54,-2,7,12,98]
print min(x)
print max(x)

#First and Last
y = ['hello',2,54,-2,7,12,98,'world']
newY = y.pop(0), y.pop()
print newY

#New List
z = [19,2,54,-2,7,12,98,32,10,-3,6]
z.sort()
#[-3, -2, 2, 6, 7, 10, 12, 19, 32, 54, 98]
front = z[:5]
print front
back = z[5:]
print back
back.insert(0,front)
print back