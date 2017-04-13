module.exports = function (){
    return {
        add: function(num1, num2) { 
        console.log('Your Total is', num1 + num2);
        },
        multiply: function(num1, num2) {
        console.log('Your Total is', num1 * num2);
        },
        square: function(num) {
        console.log('Your Total is', num * num);
        },
        random: function(num1, num2) {

        console.log('Your random number is', Math.floor(Math.random()*(num2 - num1)) + num1);
        }
    }
};