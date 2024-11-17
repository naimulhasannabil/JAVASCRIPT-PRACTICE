// Introduction to Async JavaScript

/*
? Synchronous
? Single Threaded
*/

// Basic Code
// function a() {
//     console.log('a');
// }
// console.log('End');
// a();

// Sync
// const a = function () {
//   console.log("Function Working");
//   let aTime = new Date().getTime;
//   while (aTime + 5000 >= new Date().getTime()) {}
//   console.log("Completed");
// };
// console.log("First Line");
// a();
// console.log("Last Line");

// Asynchronous JavaScript
/*
 * setTimeout
 * setInterval
 * promises
 * fetch
 * axios
 * XMLHttpRequest
 */

// setTimeout(callback, timeinms)
// console.log("Nabil");
// console.log("Nabil2");
// setTimeout(function () {
//   console.log("Nabil3");
// }, 5000);
// console.log("Nabil4");
// console.log("Nabil5");

// Promises
/*
let coffee = new Promise((res, rej) => {
     if the condition is true then it return resolved otherwise it return rejected.
    if(true){
        return res();   // Resolved
    } else{
        return rej();   // Rejected
    }
});
coffee.then(function () {
    console.log('Resolved');
}).catch(function () {
    console.log('Rejected');
});
*/
// Another Promises Code
/*
let mathAns = new Promise((res, rej) => {
  let n = Math.floor(Math.random() * 10);
  if (n < 5) {
    return res();
  } else {
    return rej();
  }
});
mathAns
  .then(function () {
    console.log("Bellow");
  })
  .catch(function () {
    console.log("Above");
  });
*/

/*
const step1 = new Promise((res, rej) => {
  setTimeout(() => {
    res("Step one done");
  }, 2000);
});

const step2 = new Promise((res, rej) => {
  setTimeout(() => {
    res("Step two done");
  }, 3000);
});
*/

// for output
/*
step1.then(function (res) {
  console.log(res);
});
step2.then(function (res) {
  console.log(res);
});
*/

// for array
// Promise.all([step1, step2]).then(res => console.log(res));
// if we add race function then it will show us who was the lower timeout function in the output.
// Promise.race([step1, step2]).then(res => console.log(res));

// Promises Chaining

/*
let promise1 = new Promise((res, rej) => {
  return res("Step One Done");
});

let promise2 = promise1.then(function (data) {
  console.log(data);
  return new Promise(function (res, ret) {
    return res("Step Two Done");
  });
});
promise2.then(function (data) {
  console.log(data);
});
*/

//Fetch
// when we use fetch it worked on micro task queue.
function randomUser() {
  fetch(`https://randomuser.me/api/`)
    .then(function (raw) {
      return raw.json();
    })
    .then(function (data) {
      console.log(data);
    })
    .catch(function () {
        // Customized error showing.
      console.error("No data Found");
    });
}
randomUser();
