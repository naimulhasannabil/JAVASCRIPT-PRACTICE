// Javascript Data Types
let firstName = "Nabil";

let fullName = "Naimul Hasan 'Nabil'"
// let fullName1 = 'Naimul Hasna \'Nabil\'';   //you can use like this.

let finalName = `My Name is ${firstName}`;

let age = 23;
let age2 = 25;
let calculation = age + age2 + firstName + age + age2;   // when we calculate number and then we add string in the calculation then the calculation will be a string type.

/*
 * BigInt
 * BigInt can't mix other data types
 * You can't add decimals
*/

let number = 9n;   //bigInt
let number2 = BigInt(5n);


let isAdult = true;     // Boolean
let someInfo;           // Undefined
let someThing = null;   // Null


let fruits = ['Apple', 'Orange', 'Lemon', 'Peer'];               //string Object
fruits[1] = 'Mango';   // replacing 'Mango' with 'orange'

// Object
let studentInfo = {            
    fullName : 'Naimul Hasan Nabil',
    age : 23,
    dateOfBirth :2003
};

console.log(studentInfo);

console.log(fruits)
console.log(number * number2);
console.log(calculation);
console.log(typeof firstName);