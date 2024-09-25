//JavaScript Numbers

const x = 99999999999999;
const y = 2.9;
const z = 3.5;
const m = (y + z).toFixed(2);    // string
// console.log(new Number(m));

// console.log((y*10 + z*10)/10);


const a = 10;
const b = 20;
const c = 30;
// if we add m in this console then we got all string numbers
// console.log(m + a + b + c);

// it will be different when we calculate multiplication, division and subtract 



// When we calculate a exception in the code.
const d = 'JavaScript';

console.log(c - d);     // output is NaN(Not a number)

// infinity 
let num = 3;
let value ='';

while(num != Infinity) {
    num = num * num;
    value = value + num + '<br>';
}
document.getElementById('title').innerHTML = value;