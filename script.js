const boxes = document
  .querySelectorAll('.box')
  .forEach((el) => el.addEventListener('click', buttonClick));
const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
const box3 = document.getElementById('box3');
const box4 = document.getElementById('box4');
const box5 = document.getElementById('box5');
const box6 = document.getElementById('box6');
const box7 = document.getElementById('box7');
const box8 = document.getElementById('box8');
const box9 = document.getElementById('box9');
var ruch = 0;
var parzysta = true;

function buttonClick() {
  var boxnumber = event.target;
  ruch += 1;
  parzystosc();
  if (parzysta === true) {
    boxnumber.style.backgroundColor = 'red';
    boxnumber.disabled = 'disabled';
  } else {
    boxnumber.style.backgroundColor = 'green';
    boxnumber.disabled = 'disabled';
  }
  winRed();
  winGreen();
}

function parzystosc() {
  if (ruch % 2 == 0) {
    parzysta = true;
  } else {
    parzysta = false;
  }
}

function winRed() {
  if (
    box1.style.backgroundColor == 'red' &&
    box2.style.backgroundColor == 'red' &&
    box3.style.backgroundColor == 'red'
  ) {
    alert('Red wins');
  } else if (
    box4.style.backgroundColor == 'red' &&
    box5.style.backgroundColor == 'red' &&
    box6.style.backgroundColor == 'red'
  ) {
    alert('Red wins');
  } else if (
    box7.style.backgroundColor == 'red' &&
    box8.style.backgroundColor == 'red' &&
    box9.style.backgroundColor == 'red'
  ) {
    alert('Red wins');
  } else if (
    box1.style.backgroundColor == 'red' &&
    box4.style.backgroundColor == 'red' &&
    box7.style.backgroundColor == 'red'
  ) {
    alert('Red wins');
  } else if (
    box2.style.backgroundColor == 'red' &&
    box5.style.backgroundColor == 'red' &&
    box8.style.backgroundColor == 'red'
  ) {
    alert('Red wins');
  } else if (
    box3.style.backgroundColor == 'red' &&
    box6.style.backgroundColor == 'red' &&
    box9.style.backgroundColor == 'red'
  ) {
    alert('Red wins');
  } else if (
    box1.style.backgroundColor == 'red' &&
    box5.style.backgroundColor == 'red' &&
    box9.style.backgroundColor == 'red'
  ) {
    alert('Red wins');
  } else if (
    box3.style.backgroundColor == 'red' &&
    box5.style.backgroundColor == 'red' &&
    box7.style.backgroundColor == 'red'
  ) {
    alert('Red wins');
  }
}

function winGreen() {
  if (
    box1.style.backgroundColor == 'green' &&
    box2.style.backgroundColor == 'green' &&
    box3.style.backgroundColor == 'green'
  ) {
    alert('Green Wins');
  } else if (
    box4.style.backgroundColor == 'green' &&
    box5.style.backgroundColor == 'green' &&
    box6.style.backgroundColor == 'green'
  ) {
    alert('Green Wins');
  } else if (
    box7.style.backgroundColor == 'green' &&
    box8.style.backgroundColor == 'green' &&
    box9.style.backgroundColor == 'green'
  ) {
    alert('Green Wins');
  } else if (
    box1.style.backgroundColor == 'green' &&
    box4.style.backgroundColor == 'green' &&
    box7.style.backgroundColor == 'green'
  ) {
    alert('Green Wins');
  } else if (
    box2.style.backgroundColor == 'green' &&
    box5.style.backgroundColor == 'green' &&
    box8.style.backgroundColor == 'green'
  ) {
    alert('Green Wins');
  } else if (
    box3.style.backgroundColor == 'green' &&
    box6.style.backgroundColor == 'green' &&
    box9.style.backgroundColor == 'green'
  ) {
    alert('Green Wins');
  } else if (
    box1.style.backgroundColor == 'green' &&
    box5.style.backgroundColor == 'green' &&
    box9.style.backgroundColor == 'green'
  ) {
    alert('Green Wins');
  } else if (
    box3.style.backgroundColor == 'green' &&
    box5.style.backgroundColor == 'green' &&
    box7.style.backgroundColor == 'green'
  ) {
    alert('Green Wins');
  }
}
