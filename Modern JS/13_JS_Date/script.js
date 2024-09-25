//Javascript Date
const myDate = new Date();

console.log(myDate);   // run to console
console.log(myDate.toString());  // Run in Terminal
console.log(typeof myDate);  // type checking
console.log(myDate.toDateString());
console.log(myDate.toLocaleString()); 

// When you need to modify the month fullName
console.log(myDate.toLocaleString('default' ,{
   weekday : 'long',
})
);