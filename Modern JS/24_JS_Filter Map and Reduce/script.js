// JS Filter Map and Reduce

const fruits = ["Mango", "Banana", "Orange", "Apple"];

// fruits.forEach((fruit) => console.log(fruit));

// Character-wise Output
const fruitCapB = fruits.filter((fruit) => fruit.toLowerCase().startsWith("b"));
console.log(fruitCapB);

// Lengthwise Output.
const fruitsLen5 = fruits.filter((fruit) => fruit.length === 6);
console.log(fruitsLen5);

// Includes Output
const fruitsStartG = fruits.filter((fruit) =>
  fruit.toLowerCase().includes("g")
);
console.log(fruitsStartG);
