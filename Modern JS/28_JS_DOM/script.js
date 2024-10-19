// JavaScript DOM
document.querySelector("h1").innerText = "Subscribe";

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
