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

//DOM
// Globally effective
// const h3 = document.querySelector('.h3');
// const h4 = document.querySelector('.h4');
// h3.style.backgroundColor = 'red';
// h4.style.backgroundColor = 'Green';
// Globally Not effective
(function () {
  const h3 = document.querySelector(".h3");
  const h4 = document.querySelector(".h4");
  h3.style.backgroundColor = "red";
  h4.style.backgroundColor = "Green";
})();
