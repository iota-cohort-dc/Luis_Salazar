// // 1
// console.log(first_variable);
// var first_variable = "Yipee I was first!";
// function firstFunc() {
//   first_variable = "Not anymore!!!";
//   console.log(first_variable);
// }
// console.log(first_variable);

// 
// first_variable was logged before it was defined.
// first_variable was set to "Yipee..."
// firstFunc was created but never called
// first_variable was called again at the end and printed.

// 2
var food = "Chicken";
function eat() {
  food = "half-chicken";
  console.log(food);
  var food = "gone";       // CAREFUL!
  console.log(food);
}
eat();
console.log(food);

// 
var new_word = "NEW!";
function lastFunc() {
  new_word = "old";
}
console.log(new_word);

