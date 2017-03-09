# # x = "luisRules"
# # x = "luisStill Rules"
# # print x
# # print 4*5
# # print "hello" + "luis"
# # v = 5
# # print 'hello',5
# # first_name = "Zen"
# # last_name = "Coder"
# # print "My name is {}{}".format(first_name,last_name)

# #If and Else
# age = 17
# if age >= 18:
# 	print "legal age"
# elif age == 17:
# 	print 'One more year!'
# else: 
# 	print "you are so young"

# #.insert('index','new element')
# x = [1,2,3,4,5]
# x.insert (2,99)
# # print x

# #.remove('index')
# x = [1,2,3]
# x.remove(1)
# # print x

# #.pop('optional_index')
# x = [1,2,3,4,5]
# x.pop()
# # print x
# y = [10,11,12,13,14]
# y.pop(1)
# # print y

# #.sort()
# x = [99,4,2,5,3]
# x.sort()
# # print x

# #slice
# x = [99,4,2,5,-3]
# # print x[:]
# # print x[1:]
# # print x[:4]
# # print x[2:4]

# my_list = [0,'hi']
# # print any(my_list)
# my_list = [0,'']
# # print any(my_list)

# names = ['kb', 'oliver', 'mikey', 'john', 'michael']
# # print '\n'.join(names)

# # for <counter> in <sequence or range>:
# 	#do something
# # for count in range (0,5):
# 	# print 'looping -', count

# my_list = [4, 'dog', 99 ['list','inside','another'],'hello world!']
# for element in my_list:
# 	print element
# #doesn't run correctly	

#while <expression>
		#do something
# count = 0
# while count < 5: 
# 	print 'looping -', count
# 	count += 1

# for val in "string":
# 	if val == 'i':
# 		break
	# print(val)

# for val in 'string':
# 	if val == 'i':
# 		continue
	# print(val)

# def add(a,b):
#   x = a + b
#   return x
# # the return value gets assigned to the "result" variable
# result = add(3,5)
# print result # this should print 8

# this function has one parameter(input)
# def say_hi(name):
#   print "Hi, " + name
# # invoking the function passing in one argument
# say_hi('Michael')
# say_hi('Andrew')
# say_hi('Jay')

# def add(a, b):
#   x = a + b
#   return x
# sum1 = add(4,6)
# sum2 = add(1,4)
# sum3 = sum1 + sum2
# print sum3

# def multiply(arr,num):
# 	print(arr,num)
#     	for x in arr:
#         	print x
#         	x *= num
#         	print arr
#     	return arr


# a = [2,4,10,16]
# b = multiply(a,5)
# print b
#wrong, x is just a pointer, once changed does not change value in the array

def multiply(arr,num):
    for x in range(len(arr)):
        arr[x] *= num
    return arr
a = [2,4,10,16]
b = multiply(a,5)
print b
# output:
# >>>[10,20,50,80]
#right!, x in now affecting value in the array











