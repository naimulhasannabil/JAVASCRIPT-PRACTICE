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
console.log("Nabil");
console.log("Nabil2");
setTimeout(function () {
  console.log("Nabil3");
}, 5000);
console.log("Nabil4");
console.log("Nabil5");
