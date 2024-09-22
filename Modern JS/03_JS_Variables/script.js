// JavaScript Variable
// JavaScript variable names are case-sensitive
// !You can't add number first
// ? _ , $ acceptable but,
// ! - is not acceptable 
let firstName;
let FirstName;    // These Two is the right way to create a variable
// let Last Name; // !warning this not the way to create a variable. variable names cannot contain spaces.
// let function; // !warning this not the way to create a variable. Variables can't be created same as reserved keywords
let fruits = 'Orange';
console.log(`${fruits} is my fav, ${fruits} I like to eat`);

/*
* var Variable 
* You can redeclare variables
* You can reassign variables
* It is Global scope
* var is hosted
*/
var a = 10;
var a = 20;       //Redeclared variable
a = "Belgium";    //Reassigned variable
console.log(a);
{
    var blocked = '30';
    console.log(a);
}
console.log(blocked);

console.log(country);
var country = "Bangladesh";     //Ouput: Undefined
var countrys;
console.log(countrys);         //Ouput: Undefined

/*
* let Variable
! You can't redeclare variables
* You can reassign variables
? It is Block scope
! let is not hoisted
*/

let b = 10;
b = 11;

console.log(b);

{
    let c = 20;
    console.log(c);
}

/*console.log(people);
 let people = "people";*/  // give us reference error

 /*
* const Variable
! You can't redeclare variables
! You can't reassign variables
? It is Block scope
! const is not hoisted
? You can change the const object value 
*/

/*  const c = 10;
 const c = 20; */   // it will show a error

 const d = 10;
{
   console.log(d);
}

/* console.log(d); */  // it will show a error

const person = {
    firstName: 'John',
    age : 21,
    city: 'New York'
}
person.country = 'United States';
person.age = 23;   // the age value is changed.
console.log(person);