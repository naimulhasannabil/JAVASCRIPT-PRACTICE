//Basics
console.log("This is the main Array.")
var fdName = ["a", "b", "c", "d", "e", "f"];
console.log(fdName); //print the array

console.log("After chanced"); 
//Change Value
fdName[5] = 'a'; //change the value
console.log(fdName);

console.log("After adding new value");

//Add Value

fdName.push('g'); //add a new value at the end
console.log(fdName);

console.log("After removing a value");

//Remove Value

fdName.pop(); //remove the last value
console.log(fdName);

//using shift and unshift methods

console.log("After adding new value using shift method");

fdName.shift(); //remove the first value
fdName.unshift('h'); //add a new value at the start
console.log(fdName);

