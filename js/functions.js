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


addition = () => {
    const finalNum1 = Number(num1.value);
    const finalNum2 = Number(num2.value);
    outputAddition(finalNum1, finalNum2);
}

function outputAddition(a, b) {
    result.innerHTML = a + b;
}

// substraction

substraction = () => {
    const finalNum1 = Number(num1.value);
    const finalNum2 = Number(num2.value);
    outputSubstraction(finalNum1, finalNum2);
}

function outputSubstraction(a, b) {
    result.innerHTML = a - b;
}

// multiplication 

multiplication = () => {
    const finalNum1 = Number(num1.value);
    const finalNum2 = Number(num2.value);
    outputMultiplication(finalNum1, finalNum2);
}

function outputMultiplication(a, b) {
    result.innerHTML = a * b;
}


// division

division = () => {
    const finalNum1 = Number(num1.value);
    const finalNum2 = Number(num2.value);
    outputDivision(finalNum1, finalNum2);
}

function outputDivision(a, b) {
    result.innerHTML = a / b;
}




