#1)
puts (1...10).include?(10) # => false
puts (1..10).include?(10)  # => true

# 2) .last returns the last object in the range, or an array of the last n elements.

puts (1..10).last    # => 10
puts (1...10).last   # => 10. Returns the last object defined in the range
puts (1..10).last(3) # => [8, 9, 10]

# 3) .max returns the maximum value in range

puts (1..10).max # => 10

# 4) .min returns the minimum value in range

puts (1..10).min # => 1