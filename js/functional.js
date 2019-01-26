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

// https://www.youtube.com/watch?v=1DMolJ2FrNY&index=4&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84 - last link
