var arr = ["James", "Jill", "Jane", "Jack"];

function FncyArr(arr){
	num = 0;
	for(var i = 0; i < arr.length; i++){
		console.log(num + "->" + arr[i]);
		num+=1;
	}
}
	FncyArr(arr);