// JavaScript Hoisting

// person = 'Naimul Hasan Nabil';
// console.log(person);

// Variable Hoisting

var x;             // Declare
x = 10;            //Initialized
console.log(x);    //usage

let y = 20;
console.log(y);

// Now let's see where actually hoisting work

z = 30;            // Initialized Before Declare
console.log(z);    // You will See there is no Error in the Console
var z;            // Declare After Usage