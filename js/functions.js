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


reset = () => {
    num1.value = "";
    num2.value = "";
    result.innerHTML = 'Result : ';
}

 

// CRACK THE CODE GAME

var cCode = [];
var count = 0;
var crackOutput =  document.getElementById("crack_output");
var c1 = document.getElementById("code1");
var c2 = document.getElementById("code2");
var c3 = document.getElementById("code3");

for(let i=0; i<3; i++){
    cCode.push(Math.floor(Math.random() * 9));
}

console.log(cCode);
//crackOutput.innerHTML = cCode;

function crackCode(){
    count=0;
    var guess = [c1.value,c2.value,c3.value];

    for(let i =0; i < cCode.length; i++){
        crackOutput.innerHTML += checkNum(guess[i],cCode[i]);
    }
     
    if (count == 3){
        crackOutput.innerHTML += " You Guessed it <br>";
    } else{
        crackOutput.innerHTML += "<br>";
    }
}

function checkNum(a,b){
    if(a>b){ return "L" ;}

    if(a<b){ return "H" ;}

    if(a==b){ 
        count++;
        return a;
    }
}



