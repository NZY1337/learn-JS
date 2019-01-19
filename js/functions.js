let response = document.getElementById('myname');
let beautify = ['gorgeous', 'interesting', 'wonderful', 'glorious', 'outrageous'];

randomName = () => {
    let askName = prompt('What is your name ?');
    let random = Math.floor(Math.random() * beautify.length);
    response.innerHTML = "Hello: " + beautify[random] + ` ${askName}`;
}


// JavaScript Calculator

// addition
const result = document.getElementById('additionResult');
const num1 = document.getElementById('add_num1');
const num2 = document.getElementById('add_num2');
let reset = document.getElementById('reset');
const lastResult = document.getElementById('lastResult');


addition = () => {
    let a = num1.value + " + " + num2.value; // what we write
    let b = Number(num1.value) + Number(num2.value); // final output
    outputHtml(a, b);
    return b;
}


// substraction

substraction = () => {
    let a = num1.value + " - " + num2.value; // what we write
    let b = Number(num1.value) - Number(num2.value); // final output
    outputHtml(a, b);
}


// multiplication 

multiplication = () => {
    let a = num1.value + " * " + num2.value; // what we write
    let b = Number(num1.value) * Number(num2.value); // final output
    outputHtml(a, b);
}

// division

division = () => {
    let a = num1.value + " / " + num2.value; // what we write
    let b = Number(num1.value) / Number(num2.value); // final output
    outputHtml(a, b);
}

function outputHtml(a, b) {
    result.innerHTML = a + " = " + b + "<br>";
}

// reset function
console.log(result.innerHTML);

reset = () => {
    num1.value = "";
    num2.value = "";
    result.innerHTML = 'Result : ';
}






