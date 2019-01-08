// git checkout

let burger = document.getElementById('menu');
burger.innerHTML = '<h3>Burger Menu</h3>';

let val = document.getElementById('value').innerText

let putIn = document.getElementById('inp');
putIn.value = val + (' (done)');

// change name dinamicaly via PROMPT
// let userName = prompt('What is your name?');
// let welcome = document.getElementById('welcome');
// welcome.innerText = 'Hello ' + userName;
