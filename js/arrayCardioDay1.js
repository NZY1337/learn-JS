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
const ordered = inventors.sort( (a, b) => a - b )

console.table(ordered);