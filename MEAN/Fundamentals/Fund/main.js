
		// var arr = [3,5,'Dojo','rocks','Michael', 'Sensei']
		// for(var i = 0; i < arr.length; i++ ){
		// 	console.log(arr[i]);
		// }
		// arr.push(100);
		// console.log(arr[i]);
		// var arr = ['hello','world','javascript is Fun']
		// console.log(arr);

		// var arr2 = []
		// var sum = 0
		// for(var i = 1; i < 151; i++){
		// 	sum += i;
		// }
		// console.log(sum) 

		// var y = [1,5,90,25,-3,0];
		// var min = y[0];
		// for(var i = 1; i < y.lentgh; i++){
		// 	if( y[i] < min ){
		// 		min = y[i];
		// 	}
		// }
		// console.log(min);
// ***************************************************************
// For-in loops
var newNinja = {
 name: 'Jessica',
 profession: 'coder',
 favorite_language: 'JavaScript', //like that's even a question!
 dojo: 'Dallas'
}
for( var item in newNinja){
	console.log(item,':', newNinja[item])

}
// ***************************************************************