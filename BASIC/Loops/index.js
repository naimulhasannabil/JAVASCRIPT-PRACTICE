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

