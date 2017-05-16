# .any? {|obj| block}  => true or false
puts ["ant", "bear", "cat"].any? { |word| word.length >= 3 }

# .each => calls block once for each element in ruby self, passing that element as a block parameter.
puts ["ant", "bear", "cat"].each { |word| print word, "--" }


puts (1..4).collect { |i| i*i } # => [1, 4, 9, 16]

puts (1..4).collect { "cat" }

puts (1..10).find_all { |i| i % 3 == 0 }
puts (1..10).reject { |i| i % 3 == 0 }
5.upto(10) { |i| print i, " " }