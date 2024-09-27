// JavaScript Loop

let car = ['BMW', 'Volvo', 'Tesla', 'Lamborghini'];
// ADD New items
car.push('Bugatti');

for (let i = 0; i < car.length; i++) {
  console.log(car[i]);
}

// For In Loop (it work when you worked with the object)

let person = {
    name: 'Nabil',
    age: 23,
    city: 'Bangladesh',
};

for (let i in person){
    // console.log(person[i]);
    let capLetter = i.charAt(0).toUpperCase() + i.slice(1);  // When you need to Uppercase letter in your Object
    console.log(capLetter + ': ' + person[i]); // You see all the items you inserted in the object
}