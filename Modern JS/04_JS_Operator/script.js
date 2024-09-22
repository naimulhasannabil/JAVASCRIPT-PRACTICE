// JavaScript operators
// ?There are 4 types operators in JavaScript
/*
* Arithmetic Operator
*/
let a = 20;
let b = 10;

// Add
let c = a + b;
// Subtract
let d = a - b;
// Multiply
let e = a * b;
// Divide
let f = a / b;
// modulus
let g = a % b;

console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);

// Real life Example of modulus
/*
let userName = prompt("Enter a Number");
let number = parseInt(userName);

if(number % 2 === 0) {
  console.log(`${number} is even number.`);
} else {
    console.log(`${number} is odd number.`);
}
*/

// Increment and decrement code

let x = 10;
x = x + 1;
x++; // Increment
console.log(x);

let y = 20;
y = y - 1;
y--; // Decrement
console.log(y);



/*
* Comparison Operator
*/


// The difference between == and === 
let p = 5;
let q = 5;

console.log(p == q); // When the Type is different, but the values are the same it works.
console.log(p === q); // when Type and value are different it didn't work.
console.log(p != q); // lower not equal value or not equal type
console.log(p !== q); // stronger not equal value or not equal type

console.log(p > q);  // Greater Than
console.log(p < q);  // Less Than
console.log(p >= q);  // Greater Than Equal to
console.log(p <= q);  // Less Than Equal to


/*
* Logical Operator
*/

// && AND Operator
// || NOT operator
// ! NOT operator

/*
* Assignment Operator
*/

let j = 10;
let k = 20;

j = j + k;   // Reassign j 
j += k;

j = j - k;
j -= k; 

j = j * k;
j *= k;

j = j / k;
j /= k;

j = j % k;
j %= k;

j **= k;  // Square

console.log(j);


/*
* Conditional (Ternary) Operator
*/

let m = a > b ? true : false;
console.log(m); 

// (typeof) is for checking operator