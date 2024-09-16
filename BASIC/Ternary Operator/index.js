// Basic Ternary Operators

var num = 10;

var result = (num > 5) ? "Number is greater than 5" : "Number is less than or equal to 5";

console.log(result); // Output: Number is greater than 5

// Ternary Operators with Function

function checkEven(num) {
    return (num % 2 === 0) ? "Even" : "Odd";
}

var num = 10;

var result = (num % 2 === 0) ? checkEven(num) : "Odd";

console.log(result); // Output: Even

// Ternary Operators with Array

var numbers = [1, 2, 3, 4, 5];

var result = numbers.map(num => (num % 2 === 0) ? "Even" : "Odd");

console.log(result); // Output: ["Odd", "Even", "Odd", "Even", "Odd"]

// Ternary Operators with Object

var obj = {
    name: "John Doe",
    age: 30
};

var result = (obj.age > 25) ? "Adult" : (obj.age > 18) ? "Adult (18-25)" : "Child";

console.log(result); // Output: Adult (18-25)

// Ternary Operators with Conditional Statements

var num = 10;

if (num > 5) {
    var result = "Number is greater than 5";
} else {
    var result = "Number is less than or equal to 5";
}

console.log(result); // Output: Number is greater than 5