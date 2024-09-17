//Basic Object
var MyInfo = {
    name: "John Doe",
    age: 30,
    city: "New York"
}

console.log(MyInfo.name); // Output: John Doe
console.log(MyInfo.age); // Output: 30
console.log(MyInfo.city); // Output: New York

//Adding a new property

MyInfo.gender = "Male";
console.log(MyInfo.gender); // Output: Male

//Updating a property

MyInfo.age = 31;
console.log(MyInfo.age); // Output: 31

//Deleting a property

delete MyInfo.city;
console.log(MyInfo.city); // Output: undefined

//Checking if a property exists

console.log("name" in MyInfo); // Output: true
console.log("country" in MyInfo); // Output: false

//Iterating over object properties

for (var prop in MyInfo) {
    console.log(prop + ": " + MyInfo[prop]);
}

//Nested objects

var MyAddress = {
    street: "123 Main St",
    city: "New York",
    state: "NY"
}

MyInfo.address = MyAddress;

console.log(MyInfo.address.street); // Output: 123 Main St

//Using object methods

var MyMathUtils = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    }
}

console.log(MyMathUtils.add(5, 3)); // Output: 8

//Creating an array of objects

var MyPeople = [
    {
        name: "John Doe",
        age: 30,
        city: "New York"
    },
    {
        name: "Jane Smith",
        age: 28,
        city: "Los Angeles"
    }
]

console.log(MyPeople[0].name); // Output: John Doe

//Using arrow function to create object methods

var MyMathUtils = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b
}

console.log(MyMathUtils.add(5, 3)); // Output: 8

//Using spread operator to clone an object

var MyClone = {...MyInfo};
console.log(MyClone.name); // Output: John Doe

//Using spread operator to merge objects

var MyMerged = {...MyInfo, ...MyAddress};
console.log(MyMerged.city); // Output: New York

//Using spread operator to convert array to object

var MyArray = ["John", "Doe", 30, "New York"];
var MyObject = {...MyArray};
console.log(MyObject[0]); // Output: John

//Using spread operator to convert object to array

var MyObject = {
    name: "John Doe",
    age: 30,
    city: "New York"
};

var MyArray = [...Object.entries(MyObject)];
var MyArray = [...Object.values(MyObject)];

console.log(MyArray[0][0]); // Output: name

// function and constructor

function Person(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.ShowMe = function() {
        console.log("Name: " + this.name + ", Age: " + this.age + ", City: " + this.city);
    }

}

var person1 = new Person("Naimul Hasan Nabil", 23, "Dhaka");

// console.log(person1.name); // Output: John Doe
// console.log(person1.age); // Output: 30
// console.log(person1.city); // Output: New York

person1.ShowMe(); // Output: Name: Naimul Hasan Nabil, Age: 23, City: Dhaka

// class and constructor

class Person {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }

    ShowMe() {
        console.log("Name: " + this.name + ", Age: " + this.age + ", City: " + this.city);
    }
}

var person2 = new Person("John Doe", 30, "New York");

// console.log(person2.name); // Output: John Doe

person2.ShowMe(); // Output: Name: John Doe, Age: 30, City: New York

// inheritance

class Employee extends Person {
    constructor(name, age, city, position) {
        super(name, age, city);
        this.position = position;
    }

    ShowMe() {
        super.ShowMe();
        console.log("Position: " + this.position);
    }
}

var employee1 = new Employee("Jane Smith", 28, "Los Angeles", "Manager");

// console.log(employee1.name); // Output: Jane Smith

employee1.ShowMe(); // Output: Name: Jane Smith, Age: 28, City: Los Angeles, Position: Manager