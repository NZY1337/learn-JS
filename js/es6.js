
/////////////////////
// ES6 JavaScript //
///////////////////  



// forEach ------------  executes a provided function once for each array element

const colors = ['red', 'blue', 'green', 'purple', 'orange'];
const newColors = [];
colors.forEach(function(color, index){
    newColors.push(`${color} ${index}`)
});


// iteration through an object
const family = [
    {
        name : 'Mocanu',
        location : 'Piatra-Neamt',
        houses : 2,
        cars : 2
    },

    {
        name : 'Giugiuca',
        location : 'Bucuresti',
        houses : undefined,
        cars : true
    }
];


const familyNames = [];
family.forEach(function(item){
    familyNames.push(item.name);
});

const numbers = [1,2,3,4,5,6];
let sum = 0;

// using a callback function

addition = (item) => {
    sum+= item;
} 

numbers.forEach(addition);
// console.log(sum);


var images = [
    { height: 10, width: 30 },
    { height: 20, width: 90 },
    { height: 54, width: 32 }
  ];

var areas = [];

images.forEach(function(img){
    let area = img.height * img.width;
    areas.push(area);
});


/* doesn't work - it doesn't return a new array, we can push if we want to have a new arr, but instead we can use map*/
const mega = images.forEach(function(img){
    return img.height * img.width;
});

//console.log(mega);//undefined




// MAP -------------- creates a new array with the results of calling a provided function on every element in the calling array.
const cars = [
    {model: 'Buick', price: 'cheap'},
    {model: 'Camaro', price: 'expensive'}
];

// carPrice - is the new array
const carPrice = cars.map(function(car){
    return car.price;
})


const paints = [{color: 'red'}, {color: 'blue'}, {color: 'yellow'}];


function pluck(array, property) {
    const newProp = array.map(function(property){
        return property['color'];
    });
    
    return newProp;
}
// console.log(pluck(paints, 'color'));

const loc = [
    [{color: 'red'}, {color: 'blue'}, {color: 'yellow'}],
];

// good
for (let i = 0; i < loc.length;i++){
    for (let j = 0; j < loc[i].length; j++) {
        // console.log(loc[i][j].color);
    }
}
// good
const locMap = loc.map(function(item) {
    for (let i = 0; i < item.length; i++) {
        // console.log(item[i].color);
    }
});
// good
const locMapp = loc.map(function(item) {
    return item.map(function(item) {
        // console.log(item.color)
    })
});




// FILTER -------------- creates a new array with all elements that pass the test implemented by the provided function.

const megaImageProducts = [
    { name : 'cucumber', type: 'vegetable', quantity: 0, price: 1 },
    { name : 'banana', type: 'fruit', quantity: 10, price: 20 },
    { name : 'cucumber', type: 'vegetable', quantity: 15, price: 4 },
    { name : 'mushrooms', type: 'vegetable', quantity: 3, price : 1.25 },
    { name : 'cerries', type: 'fruit' },
];

const price = megaImageProducts.filter(function(item){
    return item.type == 'vegetable' && item.price >= 4; 
});
// console.log(price); // --> {name: "cucumber", type: "vegetable", quantity: 15, price: 4}

const fruits = megaImageProducts.filter(function(fruit){
    return fruit.type === 'fruit';
})


const numbs = [10, 20, 30, 40];

function reject(array, iteratorFunction) {
  const arr = array.filter(function(number){
    return number !== 10;
  });
  return arr;
}

function reject(array, iteratorFunction) {
    return array.filter(function(iteratorFunction){
        return iteratorFunction !== 20 
    });
}




// FIND -------------- returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.

const megaProducts = [
    { name : 'cucumber', type: 'vegetable', quantity: 0, price: 1 },
    { name : 'banana', type: 'fruit', quantity: 10, price: 20 },
    { name : 'cerries', type: 'fruit', quantity: 21, price: 21 },
    { name : 'cucumber', type: 'vegetable', quantity: 15, price: 4 },
    { name : 'mushrooms', type: 'vegetable', quantity: 3, price : 1.25 }
];

const firstVal = megaProducts.find(function(item){
    return item.quantity === 10; 
})

const posts = [
    { id: 1, title: 'New York Time' },
    { id: 2, title: 'America\'s Got Talent'},
    { id: 3, title: 'A WarTime Love Story'}
];

const comment = { postId: 1, title: 'comment for a better world' };

filterId = (posts, comment) => {    
    return posts.find(function(post){
        return post.id === comment.postId;
    });
};

const ladders = [
    {id: 1, height:20},
    {id: 2, height:30}
];


function findWhere(array, criteria) {
    const property = Object.keys(criteria); // ["height"];
    console.log(property);
    console.log(criteria);
    return array.find(function(arrayObj) {
        return arrayObj[property] === criteria[property];
    });
}

// console.log(findWhere(ladders, {height:20}));



// EVERY & SOME--------------

let computers = [
    { name: 'Apple', ram: 14 },
    { name: 'Compaq', ram: 12 },
    { name: 'Acer', ram:18 },
    { name: 'Asus', ram:16 }
];

let allComputersCanRunPrograms = true;
let onlySomeComputersCanRunPrograms = false;

for (let i = 0; i < computers.length;i++) {
    if (computers[i].ram < 16) {
        allComputersCanRunPrograms = false;
    } else {
        onlySomeComputersCanRunPrograms = true;
    }
}

////////////////////////////////////
var requests = [
    { url: '/photos', status: 'complete' },
    { url: '/albums', status: 'pending' },
    { url: '/users', status: 'failed' }
];

const inProgress = requests.some(function(request){
    return request.status === 'pending';  // true at least 1 is true ||
});

////////////////////////////////////
var users = [
    { id: 21, hasSubmitted: true },
    { id: 62, hasSubmitted: false },
    { id: 4, hasSubmitted: true }
  ];
  
const hasSubmitted = users.every(function(user){
    return user.hasSubmitted === true; // false all need to be true &&
});

////////////////////////////////////
Field = function(value) {
    this.value = value;
}

Field.prototype.valid = function() {
    return this.value.length > 4;
}

let user = new Field('2coolforyou');
let pass = new Field('my_password');
let birthday = new Field('06/01/1990');

let validateField = [user, pass, birthday];

const validateFieldVal = validateField.every(function(field){
    return field.valid();
});

    

// REDUCE -------------- reduces the array to a single value. It executes a provided function for each value of the array (from left-to-right);
const nr = [10, 20, 30];
let smm = 0;

const addd = nr.reduce(function(smma, number){
    return smm += number;
}, 0);
  

const primaryColors = [
    { color: 'red' },
    { color: 'yellow' },
    { color: 'beige'}  
];

const asd = primaryColors.reduce(function(newArr, previous){
   newArr.push(previous.color);
   return newArr; 
}, []);


//////////////////////////////////// --- practical example interview question reduce;
// check if a string is balanced;

// falsy Values - learn about it
balancedParens = string => {
    return string.split('').reduce(function(prev, character){
        if (prev < 0) {return prev};
        if (character === '(') { return ++prev }
        if (character === ')') { return --prev }
        return prev;
    },0);
}

// console.log(balancedParens('))'));


// VERY IMPORTANT - POSTFIX - PREFIX
let x = 2;
// postfix - returns the original(default) value of the incremented var before being returned - intoarce valoarea variabilei inainte sa fie incrementate
// console.log(x++); // returns 2
// postfix - returns the new value of the variable after being incremented - intoarce valoarea variabilei inainte sa fie incrementate
// console.log(++x); // returns 3; 


const desks = [
    { type: 'sitting' },
    { type: 'standing' },
    { type: 'sitting' },
    { type: 'sitting' },
    { type: 'standing' }
];
  
const deskTypes = desks.reduce(function(total, desk) {
      if (desk.type === 'sitting') {++total.sitting}
      if (desk.type === 'standing') {++total.standing}
      return total
}, { sitting: 0, standing: 0 });


const NMBRS = [1, 1, 3, 4, 5, 5];


// console.log(unique(NMBRS));

function unic(arr){
    let finalArr = [];
    for (let i = 0; i < arr.length;i++) {
        // console.log(arr[i]);
        const found = finalArr.find(function(item){
            return item === arr[i];
        });
        
        if(found !== arr[i]) {
            finalArr.push(arr[i]);
        }
    }
    return finalArr;
}

// console.log(unic(NMBRS));

/*
    const megaProducts = [
        { name : 'cucumber', type: 'vegetable', quantity: 0, price: 1 },
        { name : 'banana', type: 'fruit', quantity: 10, price: 20 },
        { name : 'cerries', type: 'fruit', quantity: 21, price: 21 },
        { name : 'cucumber', type: 'vegetable', quantity: 15, price: 4 },
        { name : 'mushrooms', type: 'vegetable', quantity: 3, price : 1.25 }
    ];

    const firstVal = megaProducts.find(function(item){
        return item.quantity ==== 10; 
    })

*/


var leet = [1, 1, 2, 3, 4, 4];


function unique(array) {
  return array.filter(function(v, i, arr){
        // return the numbers form the written indexes
        // return the items where the index i = arr.indexOf(item);
        return i === arr.indexOf(v); //returns 1234
        // return i !== arr.indexOf(v); // retrns 1, 4
  });
}

// console.log(unique(leet));
// it logs 1, 2, 3, 4 

function uniQ(arr) {
    let newAr = [];
    for (let i = 0; i < arr.length;i++) {
        if (i === arr.indexOf(arr[i])) {
            newAr.push(arr[i]);
        }
    }
    return newAr;
}

// it logs 1, 2, 3, 4


const names = ["Mike","Matt","Nancy","Adam","Jenny","Nancy","Carl"];

uniqueArray = names.filter(function(item, pos) {
    // console.log('index: ' + names.indexOf(item) + ' item-> ' + item  + ' pos: ' + pos);
    return names.indexOf(item) == pos;
});


var numArray = [1, 3, -4, 5, 99];
for (var i = 0; i < numArray.length - 1; i++) {
    var min = i;
    for (var j = i + 1; j < numArray.length; j++) {
        if (numArray[j] < numArray[min]) {
            min = j;
        }
    }
    
    if (min != i) {
        var target = numArray[i];
        numArray[i] = numArray[min];
        numArray[min] = target;
    }
}
// console.log(numArray);



// ARROW FUNCTIONS

const team = {
    members : ['Jane', 'Bill'],
    teamName : 'Super Squad',
    
    /*
    teamSummary : function () {
        return this.members.map(function(member){
            return `${member} is on team ${this.teamName}`
        });
    }
    */
    // it doesn't work because when we pass an anonymus function, that function doesn't know who 'this' keyword is
    // fixes
    teamSummary : function () {
        return this.members.map(member => {
            return `${member} is on team ${this.teamName}`; 
        });
    }
}

// console.log(team.teamSummary());




// ...args - SPREAD Operator --------------
//  spread operator (...) accepts an unknown numbers of parameters which are stored in an array
// ...nmbr = ARRAY --> [...nmbr]
function nmbr(...nmbr) {
    return nmbr.reduce(function(number, acc){
        return acc + number;
    },0);
}

let max1 = [1, -2, 3, 4];
let max2 = [8, 3, -8, 1];

// console.log(( Math.max(...max1, ...max2)); // will result a single max array

const myPalleteColours = ['red', 'green', 'blue'];
let clientPaletteColours = ['beige', 'purple', 'kaki', 'orange'];

const concatArr = ['addedOneStart', ...myPalleteColours, ...clientPaletteColours, 'addedOneEnd'];

// important
let str = "Hello";
    
// console.log( [...str] ); // H,e,l,l,o

// When ... is at the end of function parameters, it’s “rest parameters” and gathers the rest of the list of arguments into an array.
// When ... occurs in a function call or alike, it’s called a “spread operator” and expands an array into a list.



// DEFAULT PARAMS --------------------
// 
function pers(first, lastN = 'Mocanu') {
    return `${first} ${lastN}`;
}

pers('Andrei');




// DESTRUCTURATING ESX ---------------
// DEST OBJ

const Obj = {
    car : 'Mercedes',
    type : 'car',
    wheels : 4,
    owner : 'Andrei'
}

// car, type, wheels = are variables now
// we don't have to keep tracking for the correct order of the args
const { car, type, wheels } = Obj;
const {owner} = Obj;

function myCar({ car, type, wheels }, { color }) {
    return `I have an ${car} which is a ${type} that has ${wheels} with a ${color} color`;
}

myCar(Obj, { color: 'red' });


// DEST ARRAYS -------

let arr = ['car', 'mellow', 'suit', 'apple'];
const [, , suyt] = arr;
// console.log(suyt); // 'suit'

[prop1, prop2, prop3] = arr;
// prop1 = 'car';
// prop2 = 'mellow';
// prop3 = 'suit';

// using rest

[propCar, ...rest] = arr;
// propcar = 'car'
// ...rest = 'the rest of the arr

// const companies = [
//     { name: 'Google', settled: 'Mountain view' },
//     { name: 'Facebook', settled: 'Menlo Park' },
//     { name: 'Uber', settled: 'San Francisco' }
// ];


// const [{ settled }, ...restComp] = companies 
// console.log(settled); // companies[0].settled;
// console.log(restComp); // fbk, uber
// const [, , {name}] = companies;
// console.log(name) //Uber


//////////////////////////////////////////////////////////////////
// ',' --> WORKS ONLY ONY ARRAYS TO SKIP HOW MANY ITEMS WE WANT //
//////////////////////////////////////////////////////////////////


//----------------

const Google = {
    locations : ['Mountain View', 'New York', 'London'],
    cities : ['Bucharest', 'Praga', 'Vienna']
}


const { locations: [, newyork] } = Google;
// console.log(newyork);// New York
const {cities: [ buc ]} = Google;
// console.log(buc); //Buc



// WHEN TO USE DESTRUCTURATING - WHEN WE NEED TO PASS A BUNCH OF PARAMS AND WHEN WE MIGHT LOSE
// THE RIGHT ORDER OF THEM

/*
function signup(username, password, email, dateOfBirth, city) {
    // create new User
}

signup('myname', 'mypass', 'email@example.com', '1/1/1990', 'New York');
*/

const usrr = {
    username: 'myname',
    password: 'mypass',
    email: 'email@example.com',
    dateOfBirth: '1/1/1990',
    city: 'New York'
}

// and the final function with DESTRUCTURATING

function signup({username, password, email, dateOfBirth, city}) {
    // create new User
}

signup(usrr);

// Practical usage of destructurating
const points = [
    [4, 5],
    [6, 7],
    [0, 40]
];

const pnts = points.map(pair => {
   let myObj = {}
   myObj = {
       pointX: pair[0],
       pointY: pair[1]
   }
   return myObj;
}); 

// ----------- OR x DESTRUCTURATING

const pNts = points.map(([x, y]) => {
    // return { x: x, y: y }
    return { x, y }
});


// example of destr
const profile = {
    title: 'Engineer',
    department: 'Engineering'
  };
  
function isEngineer({title, department}) {
    return title === 'Engineer' && department === 'Engineering';
}

// example of destr
const classes = [
    [ 'Chemistry', '9AM', 'Mr. Darnick' ],
    [ 'Physics', '10:15AM', 'Mrs. Lithun'],
    [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
];
  
const classesAsObject = classes.map(([subject, time, teacher]) =>{
    return { subject, time, teacher }
});



// example of destr
const nrsss = [1, 2, 3];

function double(...rest) {
    return rest * 2
}

