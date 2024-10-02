// JavaScript Higher Order Array Loop

const fruits = ["Mango", "Banana", "Orange", "Jack-Fruit"];
for (let f = 0; f < fruits.length; f++) {
  //    console.log(fruits[f]);
}

// for of
for (const f of fruits) {
  // console.log(f);     // It is easier than For loop.
}

// Break The characters.
const myName = "Naimul Hasan Nabil";
for (const name of myName) {
  // console.log(`Each char is ${name}`);
}

// Map
const country = new Map([
  ["Bn", "Bangladesh"],
  ["In", "India"],
  ["Pk", "Pakistan"],
  ["Np", "Nepal"],
]);
// Add New items
country.set("Bhu", "Bhutan");
// country.set('Bn', 'Bangladesh');   // Don't Add same type Data.
for (const key of country) {
  console.log(key);
}
