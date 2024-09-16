// Basic Functions
function myFunction (p1, p2) {
    return p1 * p2;
}

console.log(myFunction(5, 6)); // Output: 30

// Function with Default Parameter

function myFunction2 (p1 = 5, p2 = 6) {
    return p1 * p2;
}

console.log(myFunction2()); // Output: 30

// Function with Rest Parameter

function myFunction3 (...param) {
    return param.reduce((accumulator, currentValue) => accumulator + currentValue);
}

console.log(myFunction3(1, 2, 3, 4, 5)); // Output: 15

// Function with Arrow Function

const myFunction4 = (p1, p2) => p1 * p2;

console.log(myFunction4(5, 6)); // Output: 30

// Function with Template String

function myFunction5 (name) {
    return `Hello, ${name}!`;
}

console.log(myFunction5("John")); // Output: Hello, John!

// Function with Rest Parameter and Arrow Function

const myFunction6 = (...param) => param.reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(myFunction6(1, 2, 3, 4, 5)); // Output: 15

// Function with Spread Operator

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];

console.log(arr3); // Output: [1, 2, 3, 4, 5, 6]

// Function with Destructuring Assignment

const person = {
    name: "John",
    age: 30
};

const { name, age } = person;

console.log(name); // Output: John

console.log(age); // Output: 30

// Function with Error Handling

function myFunction7 (num) {
    if (typeof num !== "number") {
        throw new Error("Invalid input. Please provide a number.");
    }

    return num * 2;
}

try {
    console.log(myFunction7("5")); // Output: Invalid input. Please provide a number.
} catch (error) {
    console.error(error.message);
    // Handle the error here
}

// Function with Promise

function myFunction8 (num) {
    return new Promise((resolve, reject) => {
        if (typeof num!== "number") {
            reject(new Error("Invalid input. Please provide a number."));
        }

        resolve(num * 2);
    });
}

myFunction8("5")
   .then(result => console.log(result))
   .catch(error => console.error(error.message));
    // Handle the promise rejection here
    // or use async/await
    // try {
    //     const result = await myFunction8("5");
    //     console.log(result);
    // } catch (error) {
    //     console.error(error.message);
    // }
    // Handle the promise rejection here

    // Function with async/await
    async function myFunction9 (num) {
        if (typeof num!== "number") {
            throw new Error("Invalid input. Please provide a number.");
        }
        const result = await myFunction8(num);
        console.log(result);
        // Handle the promise resolution here
        // or use try/catch
        // try {
        //     const result = await myFunction8("5");
        //     console.log(result);
        // } catch (error) {
        //     console.error(error.message);
        // }
        // Handle the promise rejection here
    }