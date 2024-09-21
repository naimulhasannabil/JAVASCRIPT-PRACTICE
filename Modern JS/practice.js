// Basic Practices
var num = 10;
var num = 15;
console.log(num); // Variables are changeable and can be modified

let num1 = 10;
num1 = 20; // let are changeable and can be modified but when modifying the code don't add let keywords
console.log(num1);

const num2 = 10;
console.log(num2); // const are not changeable and can't be modified

// Arithmetic Operations

var num3 = 10;
var num4 = 5;

var sum = num3 + num4;
console.log(sum); // Output: 15

var diff = num3 - num4;

console.log(diff); // Output: 5

var product = num3 * num4;

console.log(product); // Output: 50

var quotient = num3 / num4;

console.log(quotient); // Output: 2

var remainder = num3 % num4;

console.log(remainder); // Output: 0

// Increment and Decrement Operations

var num5 = 5;

num5++;

console.log(num5); // Output: 6

var num6 = 5;

num6--;

console.log(num6); // Output: 4

// object
var person = {
    name : "Naimul Hasan Nabi",
    age :  23,
    city : "Dhaka"
}

console.log(person.name); // Output: Naimul Hasan Nabi

person.age = 24;

console.log(person.age); // Output: 24