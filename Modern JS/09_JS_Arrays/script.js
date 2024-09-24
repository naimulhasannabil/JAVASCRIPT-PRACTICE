// JavaScript Arrays
const lang1 = "HTML";
const lang2 = "CSS";
const lang3 = "JavaScript";
// if you have this type situation than

const language = ["HTML", "CSS", "JavaScript", "python", true, 50]; // this is good practice

// const language2 = new Array[
//   ("HTML", "CSS", "JavaScript", "python", true, 50)
// ]();
language[4] = "Tailwind CSS"; // Change the value
language[5] = "React.js"; // Change the value
language[6] = "vue.js"; // Add the value

//First items
// console.log(language[0]);
//last items
// console.log(language[language.length - 1]);
// delete or remove last items
language.pop();

// add items
language.push("AngularJS");
// add first item
language.unshift("Basic Computing");
// delete first item
language.shift();

console.log(language);
// console.log(language.at(5)); // Latest version
// console.log(language.toString()); //convert to string
// console.log(language.join(" * ")); // join
// console.log(language.length);

const person = [];
person["firstName"] = "Naimul Hasan";
person["lastName"] = "Nabil";
person[2] = 35;
// console.log(person.length);
// console.log(person);
// console.log(person[0]);

// const num = [20];
// const num = new Array(20);    //if you declare array this type you will face a lots of errors
// console.log(num);

// Array methods
const x = [1, 2, 3, 4];
const y = [5, 6, 7, 8];
const p = [10, 12];
const z = x.concat(y, p);

// console.log(z);

// feature
const a = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// console.log(a);
// console.log(a.flat());

// splice method
language.splice(2, 0, 'SAAS','Mongodb');
console.log(language)

language.splice(0, 1);