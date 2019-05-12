
///////////////////////////
//      CALLBACKS       //
/////////////////////////



function some_function(arg1, arg2, callback) {
    var my_number = Math.ceil(Math.random() * (arg1 - arg2) + arg2);
    callback(my_number);
}

some_function(5, 15, function(num) {
    // console.log("callback called! " + num);
});


//callback function
function finalNum(a, b, callback) {
    const result = a + b + Math.floor(Math.random() * (a - b) + Math.round(a + b));
    callback(result);
    // console.log(result);
}

finalNum (2, 13.5, function(num) {
    return num;
})


// CALLBACKS - VERY GOOD explanation DOWNHERE


function secondName(name, koko, callback){
    callback(name, koko);
}

function myName(name, koko){
    // alert(name + koko);
}

secondName('Andrei', 'Mocanu', myName);


// example 
function sum(num1, num2, callback){
    return callback(num1, num2);
}
function add(a, b) {
    return a + b;
}
sum(1,2, add);



// callback Functions
function person(name, age, callback) {
    const fullName = name + age + callback(location);
    // console.log(fullName);
}

person('Andrei', 29, function(location){
    location = 'Bucharest';
    return location;
});


// callback Functions
function makeMessage(s1, s2, callback) {
    const result1 = callback(s1,s2);
    return result1;
}

makeMessage(10, 20, function(a, b){
    const result2 = a + b + 20;
    return result2;
});



// callback Functions
function doHomework(val, callback){
    if (val == 'yes') {
        callback('allowed');
    } else {
        callback('not allowed');
    }
}

doHomework('bad', function(commitment){
    if (commitment) {
        // console.log('You are' + ` ${commitment} to go outside`);
    }
    else {
        // console.log('Yo are' + ` ${commitment} to go outside`);
    }
});


// callback functions
let arr = [1,2,3,4,5,6];


function higher(array, callback){
    let asd = 10;
    let result = asd + callback(array);
    // console.log(result);
}

higher(arr, function(array){
    let result = 0;
    array.map(function(item){
        if (item > 5) {
            result += item;
        }
    })
    
    return result;
});



// EXAMPLE 1 - callback named function passed like a callback (callback -> sum(n1,n2));
function digits(n1, n2, sum) {
    // we need to return the same args in the callback function otherwise the args will be undefined;
    return sum(n1, n2); // this is the callback;
}

// second invoked function - it has to be executed first because it will be passed as a callback;
function sum(n1, n2) {
    return n1 + n2;
}

// execute the function 'digits'; -> sum is (function sum(n1, n2));
// args of callback function has to have the same numbers of args like the function which will be passed in as a callback
digits(10, 20, sum);



// EXAMPLE 2 - anonymus function callback;
function numbers(n1, n2, callback) {
    return callback(n1, n2);
}

const callbacksLearned = numbers(10, 20, function(n1, n2){
    const sum = n1 + n2;
    // console.log(sum);
    return sum;
}) // result 30

const someNum = 50;
// console.log(someNum + callbacksLearned); = 80



// ANOTHER EXAMPLE OF CALLBACK
function mySandwich(param1, param2, callback) {
    // alert('Started eating my sandwich.\n\nIt has: ' + param1 + ', ' + param2);
    // callback();
}

mySandwich('ham', 'cheese', function() {
    alert('Finished eating my sandwich.');
});


// callback Functions
function doHomework(val, callback){
    if (val == 'yes') {
        callback('allowed');
    } else {
        callback('not allowed');
    }
}

doHomework('bad', function(commitment){
    if (commitment) {
        // console.log('You are' + ` ${commitment} to go outside`);
    }
    else {
        // console.log('Yo are' + ` ${commitment} to go outside`);
    }
});

// callback Functions
function makeMessage(s1, s2, callback) {
    const result1 = callback(s1,s2);
    return result1;
}

makeMessage(10, 20, function(a, b){
    const result2 = a + b + 20;
    return result2;
});


//callback function 
function calc(defaultVal, num1, num2, callback) {
    let result = callback(num1, num2);
    result+= defaultVal
    console.log(result);
}

calc(20, 10,20, function(a, b){
    return a = b;
})

// callback function
function action(x, y, callback) { 
    const result = callback(x, y);
    if(result > 18) {
        // console.log('he`s an adult')
    } else {
        // console.log('he`s not an adult');
    }
    return result;
}

function multiplication(x, y) { 
    // alert('doing the output');
    const result = x - y;
    return result;
}

// alert(action(2019, 2001, multiplication)); // output: 100

const number1 = 10;
const number2 = 10;


// callback function
function add() {
    calc(number1,  '+',  number2,function(a,b) {
        return a + b;
    });
}

add();

function calc(a, sign, b, callback) {
    const calcRes = callback(a, b);
    const res = calcRes;
    // console.log(res);
    return res;
}


// callback function
const num1 = 10;
const num2 = 10;

function result(){
    const wow = cSum(num1, num2, '+', function(a, b){
        return a + b;
    });
}

result();

function cSum(a, b, sign, callback) {
    const resSum = callback(a,b);
    const output = a + '' + sign + '' + b + '=' + resSum;
    // console.log(output);
}


// callback function 
function calcTime(placeA, placeB, person, calc) {
    const distance = calc(placeA, placeB);
    const result = `${person} travels from ${placeA} to ${placeB} in ${distance} distance`;
    // console.log(result);
}

calcTime(100, 23, 'Andrei', function(a, b){
    return a - b;
});


//callbackFunction
function finalNum(a, b, callback) {
    const result = a + b + Math.floor(Math.random() * (a - b) + Math.round(a + b));
    callback(result);
    // console.log(result);
}

finalNum (2, 13.5, function(num) {
    return num;
});

// another good examplE
//////////////////////////////////////

function getResult(a, b, random) {
    const randomFunc = random(a, b);
    const result = a + b + Math.floor(Math.random() * randomFunc) + Math.round(a + b);
    // console.log(result);
}

getResult(21.3, 0.3, function(a,b){
    return a + b;
});

//////////////////////////
// FUNCTION CALCULATOR //
////////////////////////


const firstVal = document.getElementById('add_num1');
const secondVal = document.getElementById('add_num2');
const calcRes = document.getElementById('calcRes');

function resetValues() {
    firstVal.value = '';
    secondVal.value = '';   
}

function reset() {
    calcRes.innerHTML = 'Result';
}

function output(a, b, callback) {
    return callback(a, b);
}

function addition(){
    output(firstVal.value, secondVal.value,function(a, b){
        const result = Number(a) + Number(b);
        calcRes.innerHTML = result;
    });
    resetValues();
}


function substraction(){
    output(firstVal.value, secondVal.value,function(a, b){
        const result = Number(a) - Number(b);
        calcRes.innerHTML = result;
    });
}

function multiplication(){
    output(firstVal.value, secondVal.value,function(a, b){
        const result = Number(a) * Number(b);
        calcRes.innerHTML = result;
    });
}

function division(){
    output(firstVal.value, secondVal.value,function(a, b){
        const result = Number(a) / Number(b);
        calcRes.innerHTML = result;
    });
}



///////////////////////////
// FUNCTION F I N I S H //
/////////////////////////


// callback function

// x = a + b + Math.floor(Math.radom() * (a-b)) + Math.round(a + b);
function res(a, b, random) {
    const mathFloor = Math.floor(a + b);
    const mathRandom = random(a, b);
    const result = a + b + mathFloor + mathRandom;
    // console.log(result);
}

res(10, 2.3, function(a, b){
    return Math.floor(Math.random() * (a+b));
});


///////////////////////
// REPEATED STRINGS //
/////////////////////

function checkSolution(str) {
    let newStr = str.toLowerCase().split(' ');
    let result = '';
    for (let i = 0; i < newStr.length; i++) {
        if (newStr.indexOf(newStr[i]) ==  newStr.lastIndexOf(newStr[i])) {
            result = 'not repeated';
        } 
        else {
            result = 'repeated';
            console.log(newStr[i]);
        }
    }
    return result;
}

// console.log(checkSolution('Hello baby what are you doing here'));

function checkSolution(str) {
    let newStr = str.toLowerCase().split(' ');
    let result = '';
    for (let i = 0; i < newStr.length; i++) {
        if (newStr.indexOf(newStr[i]) !==  newStr.lastIndexOf(newStr[i])) {
            result = 'repeated';
            return result;
        } 
    }
    result = 'not repeated';
    return result;
}

// console.log(checkSolution('Hello baby what are you doing here baby'));

checkStr = string => {
    let newStr = string.toLowerCase().split(' ');
    let rep = 'not repeated';

    let final = newStr.filter(function(item, index){
        if (newStr.indexOf(item) !== newStr.lastIndexOf(item)){
            rep = 'repeated';
            return item;
        } 
    });
    // console.log(rep);
    return final;
}


function addSum(a, b, callback) {
    const sum = a + b;
    console.log(a + b);
    callback(sum);
}

function hellWorld(sum, asd) {
    asd = 'hello'
    try {
        if (sum == 4) {
            console.log('The resumt is: ' + sum + asd);
        } else {
            throw 'The sum is not 4';
        }
    } catch(err) {
        console.log(err);
    }
}

addSum(1, 5, hellWorld);


function getNum(a, b, callback) {
    const sum = a + b;
    callback(a, sum);
}

function getFinal(param1, summ) {
    console.log(param1 + summ);
}

getNum(10,20, getFinal);

var myName;
console.log(myName);
myName = "Sunil";



function calculateSum(a, b, cb) {
    const sum = a + b;
    // if (sum != 10) {
    //     // if the condition isnt true, the code after throw will stop to propagate
    //     throw 'sum is not 10';
    // }

    setTimeout(function(){
        cb(sum);
    },1000)
}

// synchronusJS - all 3 functions will show their res after 1 second. 
calculateSum(5,5 , function(sum){
    console.log(sum);
})

calculateSum(20, 30, function(sum){
    console.log(sum);
})

calculateSum(30, 40, function(sum){
    console.log(sum);
})


// asyncJS - the code will be showen after one sec each
calculateSum(5,5 , function(sum){
    console.log(sum);

    calculateSum(20, 30, function(sum){
        console.log(sum);

        calculateSum(30, 40, function(sum){
            console.log(sum);
        })
    })
})