 // Basic inner function
 var world = "Nabil";
 let bangladesh = "Emon";

 function World() {
    var myName = "Nabil";
    function bangladesh() {
      console.log(myName);
      let myName2 = "Emon";
      console.log(myName2);
    }
    bangladesh();
   }
   World();
   console.log(world); // Output: Nabil
   console.log(bangladesh); // Output: Emon

 // Closure Example
 
 function createCounter() {
    var count = 0;
    return function() {
        count++;
        return count;
    }
 }
  var counter1 = createCounter();
  console.log(counter1()); // Output: 1

  var counter2 = createCounter();
  console.log(counter2()); // Output: 2

  console.log(counter1()); // Output: 3

  console.log(counter2()); // Output: 3

 // IIFE (Immediately Invoked Function Expression)
 
 (function() {
    var message = "Hello World";
    console.log(message); // Output: Hello World
 })();

 console.log(message); // Output: ReferenceError: message is not defined

 // Function Hoisting Example

 console.log(greet()); // Output: Hello, World!

 function greet() {
    console.log("Hello, World!");
 }

 // Arrow Function Example

 const greetArrow = () => console.log("Hello, World!");
 greetArrow(); // Output: Hello, World!

 // Function Overloading Example

 function add(a, b) {
    return a + b;
 }

 function add(a, b, c) {
    return a + b + c;
 }

 console.log(add(1, 2)); // Output: 3
 console.log(add(1, 2, 3)); // Output: 6
