// Basic Function Expression

var myFunction = function (p1, p2) {
    return p1 * p2;
}

console.log(myFunction(5, 6)); // Output: 30

// Function Expression with Default Parameter

var myFunction2 = function (p1 = 5, p2 = 6) {
    return p1 * p2;
}

console.log(myFunction2()); // Output: 30

// Function Expression with Arrow Function

var myFunction3 = (p1, p2) => {
    return p1 * p2;
}

console.log(myFunction3(5, 6)); // Output: 30

// Function Expression with Template String

var myFunction4 = (name) => {
    return `Hello, ${name}!`;
}

console.log(myFunction4("John Doe")); // Output: Hello, John Doe!

//practice
var ExpressionFun = function(message, message1){
     console.log(message, message1);
}
ExpressionFun("hello", "My Name is Naimul Hasan Nabil");