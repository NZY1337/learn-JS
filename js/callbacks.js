
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

// CALLBACKS - VERY GOOD explanation DOWNHERE

function myName(name, koko){
    // alert(name + koko);
}

function secondName(name, koko, callback){
    callback(name, koko);
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
function human(age, location, callback) {
    let result = `${age}, ${location}, ` + callback(gender);
    // console.log(result);
}

human(29, 'Piatra-Neamt', function(gender){
    // gender = prompt('What is your gender?');
    return gender;
});



// callback functions
let arr = [1,2,3,4,5,6];

function higher(array, callback){
    let asd = 10;
    let result = asd + callback(array);
    console.log(result);
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

// second invoked function - it needs to be executed first because it will be passed as a callback;
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
    console.log(sum);
    return sum;
}) // result 30

const someNum = 50;
// console.log(someNum + callbacksLearned); = 80

// ANOTHER EXAMPLE OF CALLBACK
function mySandwich(param1, param2, callback) {
    alert('Started eating my sandwich.\n\nIt has: ' + param1 + ', ' + param2);
    callback();
}

mySandwich('ham', 'cheese', function() {
    alert('Finished eating my sandwich.');
});