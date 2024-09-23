// JavaScript objects
const newSymbol = Symbol('Key1');
const mobileModel = {
    brand : 'Apple',
    model : 'iPhone 16 pro max',
    processor : 'Apple silicon',
    camera : ['500MP', '40MP', '40MP'],
    hasZoomCamera : true,
    [newSymbol] : 'My key1',
};

console.log(mobileModel);
mobileModel.model = 'iPhone 14 Pro max';
console.log(mobileModel.brand);
console.log(mobileModel['brand']);
console.log(mobileModel[newSymbol]);
// Object.freeze(mobileModel);   // freeze the object model

console.log(mobileModel.hasOwnProperty('model'));
console.log(Object.keys(mobileModel));
console.log(Object.values(mobileModel));

