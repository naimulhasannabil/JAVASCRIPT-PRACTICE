// JavaScript This
// Important thing is when we work this in node we get global Object and when we work with this in browser we get Window Object.
console.log(this);


// this two var and function output will generate in window
var firstName = 'Nabil';

function myFunction() {
    return this;
}
console.log(myFunction());

