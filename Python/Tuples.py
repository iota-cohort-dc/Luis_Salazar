# A Tuple is a container for a fixed sequence of data objects. The name comes from the Latin suffix for multiples: 
# double, triple, quadruple, quintuple. Tuples are sequences, just like lists. The only difference is that 
# tuples can't be changed -- that is, tuples are immutable. Also, while lists are defined using square brackets, 
# tuples use parentheses. Creating a tuple is as simple as declaring different comma-separated values. Optionally you 
# can put these values between parentheses.
# For example:
tuple_data = ('physics', 'chemistry', 1997, 2000)
tuple_num = (1, 2, 3, 4, 5 )
tuple_letters = "a", "b", "c", "d"

dog = ("Canis Familiaris", "dog", "carnivore", 12)
# We can print the data from a tuple via an index. The index operator selects an element from a tuple.
print dog[2]
#result is: carnivore

#interate through with for loop
for data in dog:
     print data

# Like strings, tuples are immutable. 
# Once Python has created a tuple in memory, it cannot be changed. But we can add and slice tuples. See example below:
dog = dog + ("domestic",)
#result is...
#("Canis Familiaris", "Dog", "carnivore", 12, "domestic")
dog = dog[:3] + ("man's best friend",) + dog[4:]
#result is...
#("Canis Familiaris", "Dog", "carnivore", "man's best friend", "domestic")

value = ("Michael", "Instructor", "Coding Dojo") #tuple packing

value = ("Michael", "Instructor", "Coding Dojo")
(name, position, company) = value #tuple unpacking
print name
print position
print company

Michael
Instructor
Coding Dojo