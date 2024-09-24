// JS Events
function subscribe() {
  document.getElementById("text").innerHTML = "Subscribed";
  document.getElementById("btn").innerHTML = "Subscribed";
  document.getElementById("btn").style.backgroundColor = "#262626";
}

// function like(){
//     document.getElementById('like').innerHTML = '<i class="fa-solid fa-thumbs-up"></i> Liked';
// }

function keyPress() {
  document.getElementById("text").innerHTML = "Key Presed 😊";
}

// function onLoad() {
//     alert('Texting JavaScript Onload');
//   document.getElementById("text").innerHTML = "Website Loaded Properly 😍";
// }

function windowResize() {
  document.getElementById("textarea").style.height = "100px";
  document.getElementById("form").style.fontFamily = "Time New Roman";
}

function onScroll() {
  document.getElementById("text").innerHTML = "Scrolling 😊";
}

//   document.getElementById('btn').onclick = function () {
//        document.getElementById('btn').innerHTML = 'Subscribed 😍';
//   }

//modern Practices

document.getElementById("ul").addEventListener(
  "click",
  function (e) {
    console.log('Ul Clicked');
  },
  true
);

document.getElementById("li").addEventListener(
    "click",
    function (e) {
      console.log('LI Clicked');
    },
    true
  );