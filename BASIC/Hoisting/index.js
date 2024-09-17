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

// Function Hoisting with Template String

console.log(myFunction2("John Doe")); // Hello, John Doe!

function myFunction2(name) {
    return `Hello, ${name}!`;
}

// Function Hoisting with Arrow Function

console.log(myFunction3(5, 6)); // 30

const myFunction3 = (p1, p2) => p1 * p2;

// Function Hoisting with Rest Parameter and Arrow Function 

console.log(myFunction4(...[5, 6])); // 30

const myFunction4 = (...param) => param.reduce((accumulator, currentValue) => accumulator + currentValue);

// Function Hoisting with Async/Await and Arrow Function 

async function myFunction5() {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
}

myFunction5();

const myFunction5 = async () => {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
};

