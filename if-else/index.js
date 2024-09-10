// Positive or Negative
var a = 10;

if(a > 0){
    console.log("This Number is Positive")
} else {
    console.log("This Number is Negative")
}

// Even or Odd
var a = 17;

if(a % 2 === 0){ 
    console.log("The Number is EVEN");
} else {
    console.log("The Number is ODD");
}

// Determine the Greater Numbers
var num1 = 1;
var num2 = 7;

if(num1 > num2){
    console.log("Number1 is Greater Numbers")
} else {
    console.log("Number2 is Greater Number")
}

// //Green CGP Calculator
var score = 75;
var grade;

if(score >= 80){
   grade = "A+";
} else if(score >= 75){
   grade = "A";
}  else if(score >= 70){
   grade = "A-";
}  else if(score >= 65){
   grade = "B+";
} else if(score >= 60){
   grade = "B-";
} else if(score >= 55){
   grade = "B";
} else if(score >= 50){
   grade = "C+";
} else if(score >= 45){
   grade = "C";
} else if(score >= 40){
   grade = "D";
} else {
   grade = "F";
}
console.log("Your Grade is: " + grade);
