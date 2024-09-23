// JavaScript Function 

function myFunction (fullName, age, dateOfBirth = null) {
    console.log('Hello ' + fullName + ' I am ' + age + ' ' + dateOfBirth);
}
myFunction('Naimul Hasan', 23, 2003);
myFunction('Nabil', 24, 2003);

function idSubscribed() {
    console.log('Subscribed');
}
document.getElementById('btn').addEventListener('click', idSubscribed);

(function(message){
    console.log('I am self-Invokeing Function.', message);
})('Its a Function');

// We store the function in the variables and it's called Function Expression 
let maths = function(x, y,){
    return x + y;
    console.log("Testing if I am Working or not");     // if add anything after the return statement it will not working.
}

console.log(maths(2, 3));
console.log(maths(4, 5));


// If you declare anything in the function it will work just in the function. it won't work outside of the function.

function myFunction2() {
    let myVar = 'Hello World!';
    console.log(myVar);
}
// console.log(myVar);  // undefined
myFunction2();

// anonymous function

let numbers = [1, 2, 3, 4, 5, 6, 7];
let sqNumbers = numbers.map(function(number){
    return number * number;
});

console.log(sqNumbers);

// Arrow Function

let add = (a, b) =>  a + b;
console.log(add(5,6));

// Nested Function
function someThing(firstName) {
    function sayHello() {
        alert('Hello! ' + firstName);
    }
   return sayHello();
}
someThing('Naimul Hasan Nabil');