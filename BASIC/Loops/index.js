// Basic Loop
for (var i = 0; i < 5; i++) {
    console.log(i);
}

// Loop Arrays

var names = ["Nabil", "Nurul", "Zahin"];

for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// Loop Objects

var person = {
    name: "Nabil",
    age: 23,
    city: "Dhaka"
}

for (var key in person) {
    console.log(key + ": " + person[key]);
}

// Nested Loop

for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 3; j++) {
        console.log("i: " + i + ", j: " + j);
    }
}

// While Loop

var i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

// Do-While Loop

var i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);

// Break Statement

for (var i = 0; i < 5; i++) {
    if (i === 3) {
        break;
    }
    console.log(i);
}

// Continue Statement

for (var i = 0; i < 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}

// Labelled Statement

outer: for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 3; j++) {
        if (i === 2 && j === 1) {
            break outer;
        }
        console.log("i: " + i + ", j: " + j);
    }
}

// Switch Statement

var day = "Saturday";

switch (day) {
    case "Sunday":
        console.log("Today is Sunday");
        break;
    case "Monday":
        console.log("Today is Monday");
        break;
    case "Tuesday":
        console.log("Today is Tuesday");
        break;
    case "Wednesday":
        console.log("Today is Wednesday");
        break;
    case "Thursday":
        console.log("Today is Thursday");
        break;
    case "Friday":
        console.log("Today is Friday");
        break;
    case "Saturday":
        console.log("Today is Saturday");
        break;
    default:
        console.log("Invalid day");
}

// Function

function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("Nabil");

// Function with Parameter

function add(a, b) {
    return a + b;
}

console.log(add(5, 6));

// Function with Default Parameter

function add(a = 5, b = 6) {
    return a + b;
}

console.log(add());

