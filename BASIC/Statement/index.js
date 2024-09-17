// Basic Break statement
for(var i = 0; i < 10; i++) {
    if(i == 5){
        break; // Exit the loop when i equals 5
    }
    console.log(i);
}

// Continue statement

for(var i = 0; i < 10; i++) {
    if(i == 5){
        continue; // Skip the current iteration when i equals 5
    }
    console.log(i);
}

// Labelled statement

outerLoop: for(var i = 0; i < 5; i++) {
    for(var j = 0; j < 3; j++) {
        if(i == 2 && j == 1){
            break outerLoop; // Exit the outer loop when i equals 2 and j equals 1
        }
        console.log("i: " + i + ", j: " + j);
    }
}

// Nested loops

for(var i = 0; i < 5; i++) {
    for(var j = 0; j < 3; j++) {
        console.log("i: " + i + ", j: " + j);
    }
}

// Loop with a condition

var i = 0;
while(i < 10) {
    console.log(i);
    i++;
}

// Loop with a condition and increment

var i = 0;
do {
    console.log(i);
    i++;
} while (i < 10);

// Loop Arrays

var names = ["John", "Alice", "Bob"];
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

