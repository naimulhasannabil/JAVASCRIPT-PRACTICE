// JS Filter Map and Reduce

const fruits = ["Mango", "Banana", "Orange", "Apple"];

// fruits.forEach((fruit) => console.log(fruit));

// Character-wise Output
const fruitCapB = fruits.filter((fruit) => fruit.toLowerCase().startsWith("b"));
// console.log(fruitCapB);

// Lengthwise Output.
const fruitsLen5 = fruits.filter((fruit) => fruit.length === 6);
// console.log(fruitsLen5);

// Includes Output
const fruitsStartG = fruits.filter((fruit) =>
  fruit.toLowerCase().includes("g")
);
// console.log(fruitsStartG);

const numbers = [1, 2, 3, 4, 5, 6];
const res5 = numbers.filter((num) => num > 3);
console.log(res5);

// When you use curly braces in arrow function you must use return like this.
const res6 = numbers.filter((num) => {
  return num > 2;
});
console.log(res6);
