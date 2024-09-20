// Basic Modern JavaScript


// ES6 Modules

import { myFunction } from './myFunction.js';

console.log(myFunction(5, 6)); // Output: 30

// ES6 Template Literals

const name = 'John Doe';
const greeting = `Hello, ${name}!`;
console.log(greeting); // Output: Hello, John Doe!

// ES6 Destructuring

const person = { name: 'John Doe', age: 30 };
const { name: newName, age: newAge } = person;
console.log(newName); // Output: John Doe
console.log(newAge); // Output: 30

// Create a new person object

const newPerson = { ...person, city: 'New York' };
console.log(newPerson.city); // Output: New York

// ES6 Classes

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}!`);
    }
}

const john = new Person('John Doe', 30);

john.greet(); // Output: Hello, my name is John Doe!

// Arrow Functions

const myFunction = (p1, p2) => p1 * p2;
console.log(myFunction(5, 6)); // Output: 30

// Promises

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(5);
    }, 2000);
});

myPromise.then((value) => {
    console.log(value); // Output: 5
});

