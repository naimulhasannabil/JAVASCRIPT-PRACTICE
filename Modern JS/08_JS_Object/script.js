// JavaScript objects
const newSymbol = Symbol('Key1');
const mobileModel = {
    brand : 'Apple',
    model : 'iPhone 16 pro max',
    processor : 'Apple silicon',
    camera : ['500MP', '40MP', '40MP'],
    hasZoomCamera : true,
    [newSymbol] : 'My key1',
    brandModel : function () { 
        return `Mobile Brand is ${this.brand} and model is ${this.model}`;
    },
    battery: {
        mah: 5000,
    },

};


// Method
function brandModel(){
    return `Mobile Brand is ${this.brand} and model is ${this.model}`;
}
brandModel();




console.log(mobileModel);
mobileModel.model = 'iPhone 14 Pro max';
console.log(mobileModel.brand);
console.log(mobileModel['brand']);
// console.log(mobileModel[newSymbol]);
// Object.freeze(mobileModel);   // freeze the object model

// console.log(mobileModel.hasOwnProperty('model'));
// console.log(Object.keys(mobileModel));
// console.log(Object.values(mobileModel));

// console.log(mobileModel.hasOwnProperty('camera'));

console.log(mobileModel.brandModel());



const obj1 = {
    a : 1,
    b : 2,
    c : 3,
};

const obj2 = {
    p : 1,
    q : 2,
    r : 3,
};

const obj3 = {
    x : 1,
    y : 2,
    z : 3,
};

// const objFinal = {
//     obj1, obj2
// }

// const objFinal = Object.assign(obj1, obj2, obj3);  // is not good practice
// const objFinal = Object.assign({},obj1, obj2, obj3);  // this is a good practice.

const objFinal = {...obj1, ...obj2, ...obj3};   // this is modern practice
console.log(objFinal);

console.log(mobileModel.battery.mah);

//constructor Object

function Person (){
    this.firstName = 'Naimul Hasan',
    this.lastName = 'Nabil';
}

const person1 = new Person();
console.log(person1);

///modified Constructor
function Person (fast, last){
    this.firstName = fast,
    this.lastName = last;
}

const person2 = new Person('Naimul Hasan ', 'Nabil');
person2.age = 23;
console.log(person2);