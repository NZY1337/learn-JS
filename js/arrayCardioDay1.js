const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];

  
  const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 
  'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 
  'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 
  'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 
  'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 
  'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 
  'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 
  'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 
  'Blair, Robert', 'Blair, Tony', 'Blake, William'];
 

// F I L T E R - doesn't affect the pp arr, returns the length of its params;

const namesBiggerThan70 = [];

const yearsBiggerThan70 = inventors.filter(function(inventor){
    if (inventor.year > 1870 && inventor.year < 1900) {
        namesBiggerThan70.push(inventor.first);
        return inventor;
    } 
});

// console.log(namesBiggerThan70);
// console.log(yearsBiggerThan70);



// M A P - will allways return the same ammount of length (like the initial arr);   // forEach - doesn't work for objects

const inventorsNames = inventors.map(function(name){
    return ` ${name.first} ${name.last}`;
});


// console.log(inventorsNames); ech element in arr - directly  === ITERATE OVER PROPERTY VALUES - a list of values; 
// it returns directly inventors[i] = inventor;
// https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html 


// FOR IN FOR OFF
for (let inventor of inventors) {
    // console.log(inventor.first);
}


// returns the indexes - returns a list of keys;
for (let i in inventors) {
    // console.log(`${i} : ${inventors[i].first}`); 
}


// S O R T
const passed = inventors.sort( (a, b) => a.passed - b.passed );
const yearBorned = inventors.sort ( (a , b) => a.year - b.year);
const lastNameSortAlpha = inventors.sort( (a , b) =>  a.last !== b.last ? a.last < b.last ? -1 : 1 : 0);

const arrAlphaNames = [];
const alphaNames = inventors.map(function(inventor){
    return arrAlphaNames.push(`${inventor.first} ${inventor.last}`);
});

arrAlphaNames.sort((a, b) => a > b ? 1 : -1 ); 

// console.log(arrAlphaNames);

// console.table(lastNameSortAlpha);
// console.table(yearBorned);


function yearLived() {
    return inventors.map(function(inventor){
        return `${inventor.first} has lived : ${inventor.passed - inventor.year}`;
    }); 
}   

// console.table(yearLived());


// REDUCE - it reduces the values to a single one


const totalYears = inventors.reduce( (start, inventor) => {
    return start + (inventor.passed - inventor.year);
},0);

// console.log(totalYears);


// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// const category = document.querySelector('.mw-category');
// const links = Array.from(category.querySelectorAll('a'));
// const de = links
//                 .map(link => link.textContent)
//                 .filter(streetName => streetName.includes('de'));


// SORT PEOPLE

const alpha = people.sort(function(lastOne, nextOne){
    // const first = lastOne.split(', ');
    // const last = nextOne.split(', ');

    const [aLast, aFirst] = lastOne.split(', ');
    const [bLast, bFirst] = nextOne.split(', ');
    return aLast > bLast ? 1 : -1;
});

// console.table(alpha);

const data = ['car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];

const objData = data.reduce((obj, item) => {
    // if (!obj[item]) {
    //     obj[item] = 0;
    // } 
    // obj[item] = obj[item] +1;
    // return obj;

    // obj[item] = (obj[item] || 0) + 1;
    obj[item] ? obj[item]++ : obj[item]=1;
    return obj;
}, {});

// console.log(objData);

const json = [
    {
      "id": "65:0",    
      "status": "ORANGE"
    },
    {
      "id": "65:0",
      "status": "GREEN"
    },
    {
      "id": "65:0",
      "status": "ORANGE"
    },
    {
      "id": "65:0",
      "status": "YELLOW"
    },
    {
      "id": "65:0",
      "status": "RED"
    },
    {
      "id": "65:0",
      "status": "GREEN"
    },
    {
      "id": "65:0",
      "status": "GREEN"
    },
     {
      "id": "65:0",
      "status": "ORANGE"  },
      {
        "id": "65:0",
        "status": "YELLOW"
      },
      {
        "id": "65:0",
        "status" : undefined
      }
];


const jsonResult = json.reduce((obj, item) => {
    if (!obj[item.status]) { // if there's no key[val] (nici o valoarea);
        obj[item.status] = 0;
    }
    obj[item.status]++;
    return obj;
}, {});

// console.log(jsonResult);

function forEachFunc() { // also with reduce
    var obj={};
    json.forEach(function(item){
        if(obj[item.status]) {
            obj[item.status]++;
        } else {
            obj[item.status] = 1;
        }
    });
    // console.log(i + ' ' + obj[i]);
    return obj;
}

// console.log(forEachFunc());



/////////////////////////////////////////
//////// SOME & EVERY & FIND &  /////////
/////////////////////////////////////////

// some - at least 1 item should be true !!!

const adult = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];

const isAdult = adult.some(person => {
    let presentYear = new Date().getFullYear();
    if ((presentYear - person.year) >= 18) {
        return true;
    } 
});

// console.log({isAdult});


// every - check every single one of them (all items should be true);

const allAdults = adult.some(person => { new Date().getFullYear() - person.year >= 18 });
// console.log(allAdults);


// find - returns the first item that it finds

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];
  

const findComm = comments.find(comment => comment.id === 823423);


// findIndex - find the index of an element in arr/obj

const indexComm = comments.findIndex(comment => comment.id === 823423);
// console.log(indexComm);

// delete this comment
let spliced = comments.splice(indexComm, 1);
// console.log(comments);
// console.log(spliced);



// spread

const newComments = [
    ...comments.slice(0, indexComm),
    ...comments.slice(indexComm + 1)
  ];

console.log(newComments);














