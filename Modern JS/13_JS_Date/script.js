//Javascript Date
const myDate = new Date();

// console.log(myDate);   // run to console
// console.log(myDate.toString());  // Run in Terminal
// console.log(typeof myDate);  // type checking
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString()); 

// When you need to modify the month fullName
// console.log(myDate.toLocaleString('default' ,{
//    weekday : 'long',
// })
// );

let updateDate = new Date('09-25-2024');
// console.log(updateDate);


let myTime = Date.now();
// Simple Check how many milliseconds our code will execute .
function simpleTask() {
    for(let step = 0; step < 10; step++) {
        console.log('Walking East to one step');
    }
}
let startTime = Date.now();
simpleTask();
let endTime = Date.now();
console.log(`The Task Took ${endTime - startTime} millisecond to complete`);