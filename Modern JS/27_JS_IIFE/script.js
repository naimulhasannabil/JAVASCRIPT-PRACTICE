// Immediately Invoked Function Expression (IIFE)

const aFunction = function (a, b) {
  console.log(`A simple Function ${a + b}`);
};
aFunction(3, 5);
aFunction(7, 5);
// IIFE
(function (a, b) {
  console.log(a + b);
})(4, 4);

((a, b) => console.log(a * b))(3, 5);
