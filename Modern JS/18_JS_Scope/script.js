// Global Scope
let car = "Bentley";
console.log(car);

if (true) {
  //Block Scope
  console.log(car);
  let bike = "R15";
  console.log(bike);
  if (true) {
    let fish = "Goldfish";
    console.log(fish);
  }
}

function firstName() {
  // Function Scope
  let cycle = "Duronto";
  console.log(cycle);
  console.log(car);
  function lastName() {
    let fruits = "Mango";
    console.log(fruits);
    console.log(cycle);
  }
  lastName();
}
firstName();
