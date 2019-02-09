
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
    return item.quantity > 10; 
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
console.log(hasSubmitted);

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





// REDUCE -------------- 