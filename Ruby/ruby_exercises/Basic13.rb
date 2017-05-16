# *********** 1) Print 1 - 255*************************
def Print
	for i in 1..255
		puts i
	end
end

# ***********2) Print odd numbers btw 1 -255********************
def oddNum
	for i in 1..255
		if i % 2 == 1
			puts i
		end
	end
end

# **********3) Print Sum*****************************
def sum
	sum = 0
	for i in 0..255
		sum += i
		puts "New Number: #{i} Sum: #{sum}"
	end
end
# *****************4) Iterate ***************************
def iterate(arr)
	 arr.each { |arr| puts arr }
end
# ***************** 5) Max ***********************************

def max(arr)
	puts "Find the Max #{arr.max}"	
end
# ******* 6) Average ***********************
def findAverage(arr)
	sum = 0 
	for i in arr
		sum += i
	end
	sum = sum.to_f / arr.length.to_f
	puts "Find the Average #{sum}"
end
# ********* 7) Array with Odd Numbers **************
def arrayWithOdd
	y = []
	for i in 1..255
		if i % 2 == 1
			y.push(i)
		end
	end
	puts "Array with Odd #{y}"
end
# ************ 8) Greater than Y **********************
def greaterThan(arr,y)
	count = 0
	# for i in arr
	# 	if i > y
	# 		count += 1
	# 	end
	# end	
	# puts count
	arr.each {|arr| count += 1 if arr > y}
	puts "Greater Than Y #{count}"
end
# ********************* 9) Square the values *****************
def squareValue(arr)
	arr.each {|arr| puts arr = arr * arr}
end
# ******************** 10) Eliminate Negs *******************
def removeNegs(arr)
	for i in 0...arr.length
		if arr[i] < 0
			arr[i] = 0
		end
	end
	puts "Remove Negatives #{arr}"
end
# ******************* 11) Max, Min, Average *******************
def MaxMinAvg(arr)
	sum = 0
	for i in arr
		sum += i
	end
	avg = sum.to_f / arr.length.to_f
	min =  arr.min
	max =  arr.max
	puts "Max is #{max}, Min is #{min}, Average is #{avg}"
end
# ***************** 12) Shifting ******************
def Shift(arr)
	arr.delete(arr.at(0))
	arr.push(0)
	# for i in 0...arr.length
	# arr[i] = arr[i+1]
	# 	if arr[i] == nil
	# 		arr[i] = 0
	# 	end
	# end
	puts "Shift Function by 1 #{arr}"
end
# **************** 13) Number to String *************
def NumToString(arr)
	for i in 0...arr.length
		if arr[i] < 0
			arr[i] = "Dojo"
		end
	end
	puts "Number to String Function #{arr}"	
end


iterate([1,2,3,4])
max([1,2,3])
findAverage([1,10])
arrayWithOdd
greaterThan([1,3,5,7], 3)
squareValue([1,5,10,-2])
removeNegs([1,5,10,-2])
MaxMinAvg([1,5,10,-2])
Shift([1,5,10,7,-2])
NumToString([-1,-3,2])






