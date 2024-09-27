// JavaScript Conditional Statements

let age = 30;

if (age > 18) {
    console.log('You are ready to open a google account');
} else if (age > 40) {
    console.log('You are Old');
} else {
    console.log('You are not ready');
}

// JavaScript Switch Statement
let category = 'bike';
let carType;

switch(category) {
    case 'car':
        carType = 'luxury';
        break;
    case 'bike':
        carType = 'sports';
        break;
    case 'truck':
        carType = 'heavy';
        break;
    default:
        carType = 'unknown';
}
console.log(carType);