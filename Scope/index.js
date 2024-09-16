// Basic Scope

var globalVar = "I am global";

function myFunction() {
    var localVar = "I am local";
    console.log(globalVar); // Output: I am global
    console.log(localVar); // Output: I am local
}

myFunction();


// Function Scope

function outerFunction() {
    var outerVar = "I am outer";
    function innerFunction() {
        var innerVar = "I am inner";
        console.log(outerVar); // Output: I am outer
        console.log(innerVar); // Output: I am inner
    }
    innerFunction();
}

outerFunction();

// Global Scope

var globalVar2 = "I am global";

function myFunction2() {
    globalVar2 = "I am reassigned";
    console.log(globalVar2); // Output: I am reassigned
}

myFunction2();

// block scope

function myFunction3() {
    let localVar2 = "I am block scoped";
    console.log(localVar2); // Output: I am block scoped
}