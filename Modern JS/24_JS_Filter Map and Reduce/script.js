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
// console.log(res5);

// When you use curly braces in arrow function you must use return like this.
const res6 = numbers.filter((num) => {
  return num > 2;
});
// console.log(res6);

// filtering using for-each
const forNums = [];
numbers.forEach((num) => {
  if (num > 5) {
    forNums.push(num);
  }
});
// console.log(forNums);

const stack = [
  {
    name: "MERN Stack",
    property: "Mongo, Express, React, Node",
    foundation: "JavaScript",
    tranding: true,
    price: 5000,
  },
  {
    name: "MEAN Stack",
    property: "Mongo, Express, Angular, Node",
    foundation: "JavaScript",
    tranding: false,
    price: 3000,
  },
  {
    name: "Laravel",
    property: "JavaScript, Vue, PHP, Laravel, MySQL",
    foundation: "PHP",
    tranding: true,
    price: 4000,
  },
  {
    name: "WordPress",
    property: "JavaScript, PHP, WordPress, MySQL",
    foundation: "PHP",
    tranding: false,
    price: 3500,
  },
];

let userStack = stack.filter((sk) => sk.foundation === "PHP");
//   console.log(userStack);

// When we need add +5 using Map
// const myNum = numbers.map(num => num + 5);
// console.log(myNum);

// chaining
const myNum = numbers
  .map((num) => num + 5)
  .map((num) => num * 5)
  .filter((num) => num >= 50);
// console.log(myNum);
