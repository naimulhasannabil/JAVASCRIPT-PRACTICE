const body = document.getElementById("body");
const button = document.querySelectorAll("li");

// First Option(Easy Code)
// red
// const redColor = document.querySelector(".red");
// redColor.addEventListener("click", function () {
//   body.style.backgroundColor = "#ff7675";
// });
//green
// const greenColor = document.querySelector(".green");
// greenColor.addEventListener("click", function () {
//   body.style.backgroundColor = "#55efc4";
// });
//blue
// const blueColor = document.querySelector(".blue");
// blueColor.addEventListener("click", function () {
//   body.style.backgroundColor = "#74b9ff";
// });
//pink
// const pinkColor = document.querySelector(".pink");
// pinkColor.addEventListener("click", function () {
//   body.style.backgroundColor = "#fd79a8";
// });
//purple
// const purpleColor = document.querySelector(".purple");
// purpleColor.addEventListener("click", function () {
//   body.style.backgroundColor = "#a29bfe";
// });

// Better Option
button.forEach(function (value) {
   value.addEventListener('click', function() {
     let className = this.classList.value;
     body.style.backgroundColor = className;
   })
})