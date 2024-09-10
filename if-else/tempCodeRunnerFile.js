var score = 75;
var grade ;

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