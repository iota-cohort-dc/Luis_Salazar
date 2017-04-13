var _ = {
   map: function(arr,callback) {
     var newArr = [];
     for (var i = 0; i < arr.length; i++) {
       newArr.push(callback(arr[i]));
     }
     return newArr;
   },
   reduce: function(arr,callback,index) {
    var memo = arr[index]; 
    for (var i = 1 ; i < arr.length; i++) {
      memo = callback(memo, arr[i]);
     }
      return memo;
   },
   find: function(arr,callback) { 
    var newArr = []
    for (var i = 0; i < arr.length; i++) {
      if (callback(arr[i]) == true) {
        newArr.push(arr[i])
        return newArr;
      }
    }

   },
   filter: function(arr,callback) { 
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
      if(callback(arr[i])){
        newArr.push(arr[i]);
      }
    }
    return newArr;
   },
   reject: function(arr,callback) {
      var newArr = [];
      for (var i = 0; i < arr.length; i++) {
        if(!callback(arr[i])){
          newArr.push(arr[i]);
        }
      }
    return newArr;
    }
 }
// you just created a library with 5 methods!

// var timesThree = _.map([1, 2, 3, 4, 5, 6], function(num){ return num * 3; });
// console.log(timesThree); 

// var  evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
// console.log(evens); 

// var  even = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
// console.log(even); 

var  sum = _.reduce([1, 2, 3], function(memo,num){ return memo + num; },0);
console.log(sum); 

// var  odds = _.reject([1, 2, 3,4,5,6], function(num){ return num % 2 == 0; });
// console.log(odds); 