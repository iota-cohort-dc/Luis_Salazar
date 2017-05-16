# x = 5
# y = 10
# z = x+y

# puts z

first_name = "Luis"
last_name = "Salazar"

# puts "Your name is " + first_name +" "+ last_name
# puts "First name is #{first_name} and Last name is #{last_name}"
# puts "First name is %s and Last name is %s " %[first_name,last_name]
x = "CodingDojo"
# puts x.class
# puts x.capitalize
# puts x.upcase
# puts x.downcase
# puts x.[2]
# puts x.include?("Dojo")

# for i in 0..5 
#   puts "Value of local variable is #{i}" 
# end

# i = 0
# num = 5
# while i < num do
#   puts "Inside the loop i = #{i}"
#   i += 1  
#   break if i == 2  
# end

# for i in 0..5 
#   next if i == 2
#   puts "Value of local variable is #{i}"   
# end

a = ["luis","dan",'dorian','Dojo']
b = [5,6,7,8,9]
c = ["Dojo", 9]
d = %w{cat dog bear}; 

puts a[0]
puts b[2]
x = (a+b)-c
puts x.to_s

puts a.shuffle.join(', ')
a.delete('dan')
puts a
puts "Length of a is #{a.length}" 

puts a.at(1)
puts a.fetch(3)

puts b.delete(7)
puts b.reverse
puts a.sort
puts d.values_at(1,2).join(' and ')




