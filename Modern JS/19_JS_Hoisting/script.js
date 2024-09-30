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

// One more things to remember Hoisting is work for var only

// game = 'Football';
// console.log(game);      // it will show a output here
// let game;       // here we see a error because let & Const dose not support Hoisting 


// Function hoisting

 function car() {
    console.log('I Love Lamborghini');
 }
 car();

 // Now Let's See Function Hoisting
 car2('R15');
 function car2(bike) {
    console.log(`I Love ${bike}`);
 }
 