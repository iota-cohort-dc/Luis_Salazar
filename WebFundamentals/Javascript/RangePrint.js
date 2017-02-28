function printRange(i, end, skip){
	while( i < end){
		console.log(i);
		i = i + skip;
	}
}
printRange(2,10,2);