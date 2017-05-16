def Puzzle1(arr)
	sum = 0
	arr2 = arr.reject { |e| e < 10  }
	for i in arr
		sum += i
	end
	puts "Sum is #{sum}"
	puts "Numbers greater than 10 are #{arr2}"
end
# *****************
def Puzzle2(arr)
	arr2 = arr.find_all { |e| e.length > 5 }
	p arr.shuffle
	p arr2
end
# *******************
def Puzzle3(arr)
	arr2 = arr.shuffle
	p arr2
	p arr2.fetch(25)
	p first = arr2.first
	if first == "a" or first == 'e' or first == 'i' or first == 'o' or first == 'u' 
		puts "poop"
	end
end
# ********************************
def puzzle4
	arr = []
	for i in 0..10
		arr.push rand(55..100)
	end
	p arr
end
# ******************************
def puzzle5
	arr = []
	for i in 0..10
		arr.push rand(55..100)
	end
	p arr.sort
	p arr.min
	p arr.max	
end
# *****************************
def puzzle6
	string = ""
	for i in 0...5
		string[i] = (65 + rand(26)).chr
	end
	p string
end
# ****************************
def puzzle7
	arr = []
	for x in 0...10
		string = ""
		for i in 0...5
			string[i] = (65 + rand(26)).chr
		end
		arr[x] = string
	end
	p arr
end

Puzzle1([3,5,1,2,7,9,8,13,25,32])
Puzzle2(["John", "KB", "Oliver", "Cory", "Matthew", "Christopher"])
Puzzle3(["a",'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'])
puzzle4
puzzle5
puzzle6
puzzle7
