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

let crackResult = document.getElementById('crack_output');
const c1 = document.getElementById('code1');
const c2 = document.getElementById('code2');
const c3 = document.getElementById('code3');
const randomNumbers = [];
let count = 0;

for (let i = 0; i < 3; i++) {
    randomNumbers.push(Math.floor(Math.random() * 9));
}
// console.log(randomNumbers);
// console.log(count);


crackCode = () => {
    count = 0;
    let myNumbers = [Number(c1.value), Number(c2.value), Number(c3.value)];

    for (let i = 0; i < myNumbers.length;i++) {
        crackResult.innerHTML += checkNumbers(myNumbers[i], randomNumbers[i]);
    }
    console.log(count);
    if (count == 3) {
        crackResult.innerHTML += ' You guessed it <br>';
    } else {
        crackResult.innerHTML += '<br>';
    }  
}

checkNumbers = (a , b) => {
    if (a > b) {return "L"};
    if (a < b) {return "H"};
    if (a == b) {
        count++;
        return a;
    }
}



// ANONYMUS FUNCTIONS - importance  - for holding variables or items that you might not need them after the function is exectued;
// low memory

let selfInfo = document.getElementById('selfInv');
let asd = 'Hello';

(function(){
    let asd = 'World';
    selfInfo.innerHTML = asd;
})();

selfInfo.innerHTML += asd;



// Guessing Game

/*
const guessBtn = document.getElementById('guess');
const guessArr = ['javascript', 'css', 'html'];
let randomGuess;

guessFun = () => {
    randomGuess = Math.floor(Math.random() * guessArr.length);
    guessGame(prompt('What is your language?'));
}

// passing a param
guessGame = guess => {
    if (guess == guessArr[randomGuess]) {
        guessBtn.innerHTML = 'You guessed corect';
    } else {
        guessGame(prompt('I guess you need to guess again'));
    }
}

*/


// Swapping Game Array

/*
const shuffleArr = ['mother', 'father', 'cousin', 'grandfather', 'grandmother'];
const shuffleOutput = document.getElementById('shuffle');


shuffleSwap = () => {
    swapFun(shuffleArr);
    shuffleOutput.innerHTML = shuffleArr;
}

swapFun = arr => {
    for (let i = 0; i < arr.length;i++) {
        let random = Math.floor(Math.random() * (i + 1));
        let myArr = shuffleArr[i];
        shuffleArr[i] = shuffleArr[random];
        shuffleArr[random] = myArr;
    }
}

*/

// remove duplicates

/*
const duplicates = [22, 'mother', 'father', 50, 'mother', 'cousin', true, false, true, 'cousin'];
const duplicatesOutput = document.getElementById('duplicates');

removeDuplicates = () => {
    const duplicatedResult = duplicatedArr(duplicates)
    duplicatesOutput.innerHTML = duplicatedResult;
}

duplicatedArr = arr => {
    const cleanArr = [];
    const cleanObj = {};
    for (let i = 0; i < arr.length; i++) {
        cleanObj[arr[i]] = 'something';
    }
    
    for (let i in cleanObj) {
          cleanArr.push(i);
    }
    console.log(cleanArr);
    return cleanArr;
}

*/

// FUNCTIONS within FUNCTIONS

function outsideFun() {
    let val = 0;

    function a() {
       val++;
       return val;
    }    
    a(); //val = 1;
    
    let b = a(); // val = 2;
    
    let c = function() {
        val++;
        return val;
    }
    c(); // val = 3;
    
    let d = c(); // val = 4;

    let e = function() {
        val--;
        return val;
    }
    
    let f = e(); // val = 3;
    return f;
}

// console.log(outsideFun());


// ListItems game

/*
const emptyList = [];

addItem = () => {
    const item = document.getElementById('item');
    emptyList.push(item.value);
    item.value = '';
    
    addListItem = () => {
        const displayList = document.getElementById('list');
        let html = '';

        emptyList.map(function(item, i){
            html += `${i + 1}. ` + `${item}` + '<br>';
        });

        displayList.innerHTML = html;
    }
    
    addListItem();
    console.log(emptyList);
}
*/



















