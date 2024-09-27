//JavaScript Memory

/*
? Call Stack
! Primitive Data Type
* String, Number, Boolean, Undefined, Null, Symbol, BigInt
*/
let fullName = "Naimul Hasan";
let webDeveloper = fullName;
webDeveloper = "Nabil";

console.log(fullName);
console.log(webDeveloper);

/*
? Heap
! Non Primitive Data Type 
* Object, Array
*/

let student = {
  name: "Nabil",
  age: 23,
};

let people = student;
people = {
  name: "Naimul",
  age: 24,
};

console.log(student);
console.log(people);
