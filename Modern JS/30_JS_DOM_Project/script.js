const body = document.getElementById("body");
const button = document.querySelectorAll("li");

// red
const redColor = document.querySelector(".red");
redColor.addEventListener("click", function () {
  body.style.backgroundColor = "#ff7675";
});
//green
const greenColor = document.querySelector(".green");
greenColor.addEventListener("click", function () {
  body.style.backgroundColor = "#55efc4";
});
//blue
const blueColor = document.querySelector(".blue");
blueColor.addEventListener("click", function () {
  body.style.backgroundColor = "#74b9ff";
});
//pink
const pinkColor = document.querySelector(".pink");
pinkColor.addEventListener("click", function () {
  body.style.backgroundColor = "#fd79a8";
});
