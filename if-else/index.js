// Positive or Negative
var a = 10;

if (a > 0) {
    console.log("This Number is Positive")
} else {
    console.log("This Number is Negative")
}

// Even or Odd
var a = 17;

if (a % 2 === 0) { 
    console.log("The Number is EVEN");
} else {
    console.log("The Number is ODD");
}

// Determine the Greater Numbers
var num1 = 1;
var num2 = 7;

if (num1 > num2) {
    console.log("Number1 is Greater Numbers")
} else {
    console.log("Number2 is Greater Number")
}

// //Green CGP Calculator
var score = 75;
var grade;

if (score >= 80) {
   grade = "A+";
} else if (score >= 75) {
   grade = "A";
}  else if (score >= 70) {
   grade = "A-";
}  else if (score >= 65) {
   grade = "B+";
} else if (score >= 60) {
   grade = "B-";
} else if (score >= 55) {
   grade = "B";
} else if (score >= 50) {
   grade = "C+";
} else if (score >= 45) {
   grade = "C";
} else if (score >= 40) {
   grade = "D";
} else {
   grade = "F";
}
console.log("Your Grade is: " + grade);

//Write a program that calculates the ticket price based on age with the following conditions: age below 12 pay a ticket price of 5, age below 18 pay a ticket price of 10, age below 60 pay a ticket price of 20, age over 60 play a ticket price of 15.

var age = 61;
var ticketPrice;

if (age < 12) {
    ticketPrice = 5;
} else if (age >= 12 && age < 18) {
    ticketPrice = 10;
} else if (age >= 18 && age < 60) {
    ticketPrice = 20;
} else {
    ticketPrice = 15;
}
console.log("Ticket Price: $" + ticketPrice);

// Write a program that determines if a year is a leap year.
var year = 2024;

if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    console.log(year +"is a Leap Year.");
} else {
    console.log(year +"is not a Leap Year.");
}

// Write a program that calculates a discount based on the purchase amount.Prices equal or over 100 discount have a discount of 20. Prices equal or over 50 have a discount of 10. Otherwise discount is 0
var purchase = 100;
var discount;

if (purchase >= 100) {
    discount = 20;
} else if (purchase >= 50) {
    discount = 10;
} else {
    discount = 0;
}
console.log("Discount: " + discount + "%")

// Write a program that greets the user based on the time of day. Display good morning, good afternnon or good evening based on the time of day when you run the code.
var currentTime = new Date();
var currentHour = currentTime.getHours();
var greeting;

if (currentHour < 12) {
    greeting = "Good morning!";
} else if (currentHour < 18) {
    greeting = "Good afternoon!";
} else {
    greeting = "Good evening!";
}
console.log(greeting); // this code Output (depending on the time of day you execute the code).

// Write a program that calculates the Body Mass Index (BMI) and categorizes it. The formula for BMI is: weight / (height * height).
