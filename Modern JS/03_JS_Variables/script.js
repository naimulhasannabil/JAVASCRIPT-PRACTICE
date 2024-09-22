// JavaScript Variable
// JavaScript variable names are case-sensitive
let firstName;
let FirstName;    // These Two is the right way to create a variable
// let Last Name; // !warning this not the way to create a variable. variable names cannot contain spaces.
// let function; // !warning this not the way to create a variable. Variables can't be created same as reserved keywords

/*
*var Variable 
*You can redeclare variables
*You can reassign variables
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




let fruits = 'Orange';
console.log(`${fruits} is my fav, ${fruits} I like to eat`);
