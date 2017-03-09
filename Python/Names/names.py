#Part 1
students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
]
for value in students:
	print value['first_name'], value['last_name']

#Part 2
users = {
 'Students': [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
  ],
 'Instructors': [
     {'first_name' : 'Michael', 'last_name' : 'Choi'},
     {'first_name' : 'Martin', 'last_name' : 'Puryear'}
  ]
 }
 #key=students/instructors
 #data=everything in each line under the key"fname,michael,lname,jordan"
 #users=the entire dictionary"everything"
for key , data in users.items(): 
#forloop to acess what we want in the "users"table	
 	print key
 	#prints"students" then "instructors" before the names in that key
 	count = 0
 	#setting count 
 	for value in data:
 		#forloop to access the value of 'first_name'and'last_name
 		count+=1
 		#adding 1 to the count
 		print count, value['first_name'],value['last_name'], len(value['first_name'])+len(value['last_name']) 
 		#pringting the count,fname,lname,and length of  the name.
 		