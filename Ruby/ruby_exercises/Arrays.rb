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