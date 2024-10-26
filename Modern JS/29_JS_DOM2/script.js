//JavaScript DOM
// Add text inside tags
let headTitle = document.querySelector('h1');
// headTitle.innerText = 'Hello Naimul Hasan Nabil';      // Direct Change HTML Value
headTitle.innerText = headTitle.innerText + " Naimul Hasan Nabil";     // Concat HTML Value

// Change Text
// let boxes = document.querySelectorAll('.box');
// boxes[0].innerText = 'Box 1';
// boxes[1].innerText = 'Box 2';
// boxes[2].innerText = 'Box 3';


//using loop to change all Box value
// let newNum = 1;
// for(box of boxes){
//     box.innerText = `Box No ${newNum}`;
//     newNum++;
// }

// Create Element
let learnBtn = document.createElement('button');
learnBtn.innerText = 'Learn More';

let heroArea = document.querySelector('.hero');
heroArea.append(learnBtn);   //Last
// heroArea.prepend(learnBtn);  //Fast
// heroArea.before(learnBtn);   // Out of hero area before
// heroArea.after(learnBtn);     // Out of hero area after

// Add Element
// function addFruits(nameFruits) {
//     const li = document.createElement('li');
//     li.innerHTML = `${nameFruits}`;

//     document.querySelector('ul').appendChild(li);
// }
// addFruits('jack-Fruits')
// addFruits('Orange');

//optimized way
function addFruitsOP(nameFruits) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(nameFruits));

    document.querySelector('ul').appendChild(li);
}
addFruitsOP('jack-Fruits')
addFruitsOP('Orange');