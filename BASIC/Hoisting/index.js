// Basic Hoisting

console.log(myVar); // undefined

var myVar = 5;

// Function Hoisting

myFunction();

function myFunction() {
    console.log("Hello World!");
}

// Function Hoisting with Let

console.log(myLet); // ReferenceError

let myLet = 5;

// Function Hoisting with Const

console.log(myConst); // ReferenceError

const myConst = 5;


