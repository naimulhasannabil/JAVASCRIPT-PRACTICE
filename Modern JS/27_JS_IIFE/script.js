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

// Stored in Variable.
const myModule = (function () {
  let privateVar = "This is a Private Variable";
  function privateFunc() {
    console.log("This is a Private Function");
  }
  return {
    publicVar: "This is a Public Variable",
    pubMethod: function () {
      return "This is a Public Method";
    },
  };
})();

//console.log(myModule.privateVar);    //Unaccessible
//console.log(myModule.privateFunc);     // Unaccessible
console.log(myModule.publicVar); //Accessible
console.log(myModule.pubMethod());
