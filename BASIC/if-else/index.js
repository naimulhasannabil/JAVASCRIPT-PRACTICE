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
var weight = 70; // in kilograms
var height = 1.75 // in meters
var bmi = weight / (height * height);
var category;

if (bmi < 18.5) {
    category = "UnderWeight";
} else if (bmi < 24.9) {
    category = "Normal Weight";
} else if (bmi < 29.9) {
    category = "Overweight";
} else {
    category = "Obese";
}
console.log("BMI: " + bmi.toFixed(2)); // .toFixed(2) limit the number of decimals to 2
console.log("Category: " + category);

// Write a simple number guessing game. Provide a secret number and a guess. Based on those numbers give players clues if their guess is higher, lower or correct.

var secretNumber = 7;
var guess = 5; // The player's guess, change this to see that different code lines are executed based on the conditions
if (guess === secretNumber) {
    console.log("Congratulations! You guessed the correct number.");
} else if (guess < secretNumber) {
    console.log("Try a higher number.");
} else {
    console.log("Try a lower number.");
}

// Write a program that converts temperature from Celsius to Fahrenheit. The formula for conversion is: (celsius * 9/5) + 32.

var celsius = 25; // in Celsius
var fahrenheit = (celsius * 9/5) + 32;
console.log("Temperature in Fahrenheit: " + fahrenheit.toFixed(2)); //.toFixed(2) limit the number of decimals to 2

// Write a program that calculates the area of a rectangle. The formula for the area of a rectangle is: length * width.

var length = 5; // in meters
var width = 3; // in meters
var area = length * width;
console.log("Area of the rectangle: " + area + " square meters");


// Write a program that calculates the area of a circle. The formula for the area of a circle is: π * radius^2.

var radius = 5; // in meters
var area = Math.PI * Math.pow(radius, 2);
console.log("Area of the circle: " + area.toFixed(2)); //.toFixed(2) limit the number of decimals to 2

// Write a program that calculates the volume of a sphere. The formula for the volume of a sphere is: (4/3) * π * radius^3.

var radius = 5; // in meters
var volume = (4/3) * Math.PI * Math.pow(radius, 3);
console.log("Volume of the sphere: " + volume.toFixed(2)); //.toFixed(2) limit the number of decimals to 2


