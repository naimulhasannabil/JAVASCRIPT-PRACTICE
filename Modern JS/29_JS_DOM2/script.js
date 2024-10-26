//JavaScript DOM
// Add text inside tags
let headTitle = document.querySelector('h1');
// headTitle.innerText = 'Hello Naimul Hasan Nabil';      // Direct Change HTML Value
headTitle.innerText = headTitle.innerText + " Naimul Hasan Nabil";     // Concat HTML Value

// Change Text
let boxes = document.querySelectorAll('.box');
boxes[0].innerText = 'Box 1';
boxes[1].innerText = 'Box 2';
boxes[2].innerText = 'Box 3';


//using loop to change all Box value
let newNum = 1;
for(box of boxes){
    box.innerText = `Box No ${newNum}`;
    newNum++;
}