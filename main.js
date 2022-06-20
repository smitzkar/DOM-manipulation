// Simple code to add a new div (with class and content) as child to an existing one.

// Get reference to existing div by id, store in container variable
const container = document.querySelector('#container');

// Create new div, store in content variable
const content = document.createElement('div');
// Add a class (named 'content'), then add textContent to it
content.classList.add('content');
content.textContent = 'Lorem ipsum, etc.';

// Append new div to container  
// container.appendChild(content);

// Make it appear on button click only
document.getElementById('magic').onclick = function(){myFunction()};

function myFunction() {
  document.getElementById('magic').innerHTML = "Magic!";
  container.appendChild(content);
  container.appendChild(red);
  container.appendChild(h3);
  container.appendChild(black);
}


// Excercise 

// Add <p>
const red = document.createElement('p');
red.classList.add('redText');
red.textContent = 'Hey, I\'m red!';
red.style.color = 'red';

const h3 = document.createElement('h3');
h3.textContent = 'I\'m blue!';
h3.style.color = 'blue';

const black = document.createElement('div');
black.style.backgroundColor = 'pink';
black.style.border = '5px solid black';
const h1 = document.createElement('h1');
h1.textContent = 'I\'m in a div';
const p = document.createElement('p');
p.textContent = 'ME TOO';

black.appendChild(h1);
black.appendChild(p);