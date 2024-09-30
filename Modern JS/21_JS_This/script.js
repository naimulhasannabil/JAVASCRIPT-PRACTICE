// JavaScript This
// Important thing is when we work this in node we get global Object and when we work with this in browser we get Window Object.
// console.log(this);

// this two var and function output will generate in window
var firstName = "Nabil";

function myFunction() {
  return this;
}
// console.log(myFunction());

const myFunc = () => {
  // console.log(this);
};
myFunc(); // You see that function and arrow function Both refer to Window

const myBtn = document.querySelector('button');
myBtn.addEventListener('click', function () {
    // console.log(this);   // Show html Button in the Console
});

// If you declare a method the method refer a object
// If you declare a function the function refer to window / Global

const student = {
  fName : 'Nabil',
  sInfo : function () {
      return `${this.fName} loves to read`
  }
}
console.log(student.sInfo());