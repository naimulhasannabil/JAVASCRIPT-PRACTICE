// JavaScript DOM
// document.querySelector("h1").innerText = "Subscribe";
// document.querySelector('h1').innerText;
// ('Welcome');
// document.querySelector('h1').textContent;
// ('Welcome Ali');
// document.querySelector('h1').innerHTML;
// ('Welcome <span style="display: none;">Ali</span>');

const box = document.querySelector(".box");
box.style.backgroundColor = "red";
box.style.width = "100px";
box.style.height = "100px";

// //This Box is selected by Class.
// const box1 = document.querySelector(".box1");
// box.style.backgroundColor = "green";
// box.style.width = "100px";
// box.style.height = "100px";

//Another way
document.getElementById("box").style.backgroundColor = "blue";

//Customizing All menu bar in one selector and using forEach Loop.
const menuItem = document.querySelectorAll("a");
// menuItem[0].style.color = 'red';
menuItem.forEach(function (i) {
  i.style.color = "red";
  i.style.fontSize = "25px";
});

const cusClass = document.getElementsByClassName("nav_link");
// Convert nodeClass to Array.
const convertedClass = Array.from(cusClass);
// for (let i = 0; i < cusClass.length; i++) {
//   console.log(cusClass[i]);
// }
convertedClass.forEach(function (i) {
  i.style.backgroundColor = "#262626";
  i.style.margin = "0 0 15px";
  i.style.padding = "10px 20px";
});

// Check className and ID.
// document.querySelector('.box').id;
// document.querySelector('.box').className;

//Attribute check
// document.querySelector('.box').getAttribute('id');