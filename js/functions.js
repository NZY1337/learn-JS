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
console.log(randomNumbers);
console.log(count);


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


function guess(guessNumb) {
    let guessAgain = console.log('You need to guess again');
    if (guessNumb == number) {
        console.log('you did it');
    } else {
        guess(prompt(guessAgain));
    }
}

guess(10);

*/

let animals = [
    {name : 'Hero',   species : 'hipo',   age: 5},
    {name : 'Casie',  species : 'marvel', age: 10},
    {name : 'Tom',    species: 'cat',     age: 4},
    {name : 'Castor', species: 'dog',     age: 13},
    {name : 'Victor', species: 'cat',     age: 2}
];

// map - an array like initial array | filter - filtered array
let onlyCats = animals.filter(function(animal){
    return animal.species === 'cat';
});


// reduce logic
let ages = animals.reduce(function(total, animal){
    console.log('faze: ', total + ' result ' + ' + ' +  animal.age  + ' = ' + (animal.age + total) + ' result');
    return total + animal.age;
}, 0);


// reduce - create object
// https://www.youtube.com/watch?v=1DMolJ2FrNY&index=4&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84 - last link

let reducePeople = [
    ['Mark Johnson', 'Piatra-Neamt', 24, 'married'],
    ['Andreas Jacobsen', 'Bucuresti', 23, 'single'],
    ['Mathias Mayer', 'Warsaw', 50, 'married'],
    ['Johnie Walker', 'Malaysia', 74, 'divorced'],
    ['Katie Jackson', 'Arizona', 21, 'single']
];


let reduceArr = reducePeople.reduce(function(obj, person){
    // obj.push{name : 'lol'}  -> doesn't work; Push works only with arrays
    /*
        'Mark Johnson' = [
            {
                age : 24,
                location : "Piatra-Neamt",
                status : 'married'
            }
        ]
    */
    obj[person[0]] = [];
    obj[person[0]].push({
        name : person[0],
        age :person[2],
        status : person[3]
    })
    return obj;
}, {});

console.table(reduceArr);







































