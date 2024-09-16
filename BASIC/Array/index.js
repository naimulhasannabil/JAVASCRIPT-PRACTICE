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

//Using splice method

console.log("After adding new value using splice method");

fdName.splice(2, 0, 'i'); //add a new value at index 2
console.log(fdName);

console.log("After removing a value using splice method");

fdName.splice(3, 1); //remove the value at index 3

console.log(fdName);

//Using slice method

console.log("After slicing a part of array");

var sliceArray = fdName.slice(1, 4); //slice the array from index 1 to index 4
console.log(sliceArray);

console.log("After reversing the array");

fdName.reverse(); //reverse the array  

console.log(fdName);

console.log("After sorting the array");

fdName.sort(); //sort the array in ascending order

console.log(fdName);

console.log("After sorting the array in descending order");

fdName.sort(function(a, b){return b - a}); //sort the array in descending order

console.log(fdName);

console.log("After concatenating two arrays");

var array2 = ['j', 'k', 'l'];

var concatenatedArray = fdName.concat(array2); //concatenate two arrays

console.log(concatenatedArray);

//Searching an element in an array

console.log("Searching an element in an array");

console.log(fdName.indexOf('c')); //search for 'c' in the array and return its index

console.log(fdName.lastIndexOf('c')); //search for 'c' in the array from the end and return its index
