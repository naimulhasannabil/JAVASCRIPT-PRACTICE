// Global Scope
let car = "Bentley";
console.log(car);

if (true) {
    //Block Scope
  console.log(car);
  let bike = "R15";
  console.log(bike);
}

function name() {
    // Function Scope
  let cycle = "Duronto";
  console.log(cycle);
  console.log(car);
}
name();
